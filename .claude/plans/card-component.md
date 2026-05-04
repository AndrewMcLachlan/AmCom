# Card Component — Generic Landing Page

## Context

andrewmclachlan.com needs a Projects landing page that showcases ~7 personal projects, mixing apps with UIs (CodeHerd, WranglerCI, MooBank) and code libraries (ASM, MooApp). The current page at `/Home/Projects` is **unpublished** and uses static hardcoded HTML inside a `contentPage` — it's stale (mentions only 4 older projects, no images, no visual hierarchy).

The new page replaces it with a CMS-managed bento grid of project cards. Each card is editor-controlled: optional screenshot drives visual variant, a size dropdown drives bento spans. Architecturally this mirrors the existing **Home → `summaryList` → `Summary`** pattern exactly (BlockList of element types, no child pages, no custom controllers).

## Architectural decisions (confirmed)

| Question | Decision |
|---|---|
| Card storage | **BlockList element type**, mirrors Home → summaryList → Summary |
| Page top section | **PageHeader composition** (full-width h2 with bg photo, like ContentPage) |
| Existing `projects.config` | **Delete and replace** — content gets re-entered as Card blocks |
| Sizing model | **Single `cardSize` dropdown** (Hero / Standard) + screenshot presence |

**Visual variants from cardSize × screenshot:**
- `cardSize=Hero` → 2×2 bento span (regardless of screenshot)
- `cardSize=Standard` + screenshot → 2×1 visual card
- `cardSize=Standard` + no screenshot → 1×1 typographic card

## Existing patterns being reused

| Pattern | Source file | Reuse for |
|---|---|---|
| Element type with title/content/image/link | `uSync/v17/ContentTypes/summary.config` | `card` doc type structure |
| Page doc type with PageHeader composition | `uSync/v17/ContentTypes/contentpage.config` | `landingPage` doc type compositions |
| Page with BlockList iteration | `Views/Home.cshtml` lines 16–29 | `Views/LandingPage.cshtml` |
| Card partial markup | `Views/Partials/Summary.cshtml` | `Views/Partials/Card.cshtml` |
| Card CSS (hover, light-dark, radius) | `CSS/summary.css` | `CSS/cards.css` |
| Dropdown property | `uSync/v17/DataTypes/HorizontalPosition.config` | `Card+Size.config` |
| BlockList datatype | `uSync/v17/DataTypes/Summaries.config` | `Cards.config` |
| External URL field | `uSync/v17/DataTypes/MultiURLPicker.config` (already exists, reuse) | `primaryLink` property |
| Reveal-on-scroll animation | `.reveal` / `.reveal-group` in `summary.css` | Card entry animation |

## Files to add or modify

### New uSync DataTypes (`src/AmCom.Web/uSync/v17/DataTypes/`)

1. **`Card+Size.config`** — `Umbraco.DropDown.Flexible`, items: `["Hero", "Standard"]`, single-select. Model after `HorizontalPosition.config`. New GUID.
2. **`Cards.config`** — `Umbraco.BlockList`, single allowed block referencing the `card` element type. Model after `Summaries.config`. New GUID.

Reuse existing: `MultiURLPicker` (for `primaryLink`), `MediaPicker3`-equivalent `ImageMediaPicker` or `MediaPicker` (for `screenshot`), `Textstring`/`Textarea`/`RichtextEditor` (for text fields).

### New uSync ContentTypes (`src/AmCom.Web/uSync/v17/ContentTypes/`)

3. **`card.config`** — Element Type, `IsElement: true`, Folder: `Element+Types`. Properties on a single `Card` tab/group:

   | Alias | Type | Mandatory | Sort | Notes |
   |---|---|---|---|---|
   | title | Umbraco.TextBox | yes | 0 | Project name |
   | tagline | Umbraco.TextBox | no | 1 | Short one-liner under title |
   | description | Umbraco.RichText | yes | 2 | Body |
   | primaryLink | Umbraco.MultiUrlPicker | yes | 3 | Single link, internal or external |
   | linkLabel | Umbraco.TextBox | no | 4 | CTA / aria-label text; defaults to "View project" if blank |
   | screenshot | Umbraco.MediaPicker3 | no | 5 | Optional — drives visual vs typographic |
   | cardSize | Umbraco.DropDown.Flexible | yes | 6 | References `Card+Size` datatype |

4. **`landingpage.config`** — Page Doc Type, `IsElement: false`, `AllowAtRoot: false`. Compositions: `metadata`, `navigation`, `pageHeader`, `sitemap` (same set as `contentPage`). Single property `cards` (BlockList, references `Cards` datatype, mandatory) on a `Cards` group under a `Content` tab. DefaultTemplate: `LandingPage`.

### Modified ContentType

5. **`home.config`** — add `landingPage` to the `<Structure>` allowed children list (after `contentPage`).

### New Template (`src/AmCom.Web/uSync/v17/Templates/`)

6. **`landingpage.config`** — template alias `LandingPage`, name `Landing Page`, master `layout`. Model after `templates/page.config`. New GUID.

### New Razor views (`src/AmCom.Web/Views/`)

7. **`LandingPage.cshtml`** — inherits `UmbracoViewPage<ContentModels.LandingPage>`, layout `Layout.cshtml`. Render `PageHeader` partial, then iterate `Model.Cards` in a `<section class="cards-grid">`, calling `Html.RenderPartialAsync("Card", block.Content)`.

   Skeleton (matches Home.cshtml pattern):
   ```razor
   @inherits Umbraco.Cms.Web.Common.Views.UmbracoViewPage<ContentModels.LandingPage>
   @{
       Layout = "Layout.cshtml";
       ViewBag.Title = Model.Value("title");
       ViewBag.Description = Model.Value("description");
       ViewBag.Canonical = Model.Url();
   }
   @await Html.PartialAsync("PageHeader", Model)
   <section class="container cards-section">
       @{
           var cards = Model.Cards;
           if (cards != null)
           {
               <div class="cards-grid reveal-group">
                   @foreach (var card in cards)
                   {
                       await Html.RenderPartialAsync("Card", card.Content, new ViewDataDictionary(ViewData));
                   }
               </div>
           }
       }
   </section>
   ```

8. **`Partials/Card.cshtml`** — single card, structure mirrors `Summary.cshtml`. Computes a modifier class from `cardSize` and screenshot presence:
   ```razor
   @{
       var size = (Model.CardSize ?? "Standard").ToLowerInvariant();
       var image = Model.Screenshot;
       var url = Model.PrimaryLink?.Url;
       var label = String.IsNullOrWhiteSpace(Model.LinkLabel) ? "View project" : Model.LinkLabel;
       var sizeClass = $"card--{size}";
       var imgClass = image != null ? "card--has-image" : "card--text-only";
   }
   <a class="card reveal @sizeClass @imgClass" href="@url" aria-label="@label">
       @if (image != null)
       {
           <div class="card-image"><img src="@image.Url()" alt="@Model.Title" loading="lazy" /></div>
       }
       <div class="card-text">
           <h3>@Model.Title</h3>
           @if (!String.IsNullOrWhiteSpace(Model.Tagline))
           {
               <p class="card-tagline">@Model.Tagline</p>
           }
           <div class="card-description">@Html.Raw(Model.Description)</div>
           <span class="card-cta">@label<span class="arrow">&#10140;</span></span>
       </div>
   </a>
   ```

### New CSS (`src/AmCom.Web/CSS/`)

9. **`cards.css`** — bento grid + card variants. Key rules:

   ```css
   .cards-grid {
       display: grid;
       grid-template-columns: repeat(4, 1fr);
       grid-auto-flow: dense;
       gap: 2rem;
   }

   .card {
       display: flex;
       flex-direction: column;
       padding: 2.5rem;
       text-decoration: none;
       color: var(--text-colour);
       background-color: light-dark(var(--colour-muted-bone), var(--colour-lighter));
       border-radius: 16px;
       box-shadow: 0 2px 8px light-dark(rgba(0,0,0,0.06), transparent);
       transition: transform 0.3s ease, box-shadow 0.3s ease;
       grid-column: span 1;
       grid-row: span 1;
   }
   .card:hover {
       transform: translateY(-4px);
       box-shadow: 0 12px 40px light-dark(rgba(0,0,0,0.12), rgba(0,0,0,0.3));
   }

   /* Hero: 2x2 */
   .card--hero { grid-column: span 2; grid-row: span 2; }
   /* Standard with image: 2x1, image+text side-by-side */
   .card--standard.card--has-image {
       grid-column: span 2;
       flex-direction: row;
       align-items: center;
       gap: 2rem;
   }
   /* Typographic 1x1 already default */

   .card-image img { max-width: 100%; height: auto; border-radius: 12px; }
   .card h3 { font-family: 'Sora', sans-serif; color: var(--brand-colour); margin: 0 0 0.5rem; font-size: 1.6rem; }
   .card--hero h3 { font-size: 2rem; }
   .card-tagline { font-size: 1.05rem; opacity: 0.85; margin: 0 0 1rem; }
   .card-cta { /* same orange-pill pattern as .summary-cta */ }

   /* Tablet: 2 cols, hero collapses to 2x1 */
   @media (max-width: 991px) {
       .cards-grid { grid-template-columns: repeat(2, 1fr); }
       .card--hero { grid-row: span 1; }
   }
   /* Mobile: 1 col */
   @media (max-width: 767px) {
       .cards-grid { grid-template-columns: 1fr; gap: 1.5rem; }
       .card,
       .card--standard.card--has-image,
       .card--hero { grid-column: span 1; grid-row: span 1; flex-direction: column; }
   }
   ```

10. **`site.css`** — add `@import './cards.css';` after `summary.css`.

### Content removal

11. **Delete** `src/AmCom.Web/uSync/v17/Content/projects.config` (contentPage instance with stale hardcoded HTML). Replace by creating a fresh `landingPage` content node in the backoffice; uSync will write a new file on export.

### Auto-generated (do not hand-write)

After uSync runs in the backoffice, the following will be regenerated:
- `src/AmCom.Web/umbraco/models/Card.generated.cs`
- `src/AmCom.Web/umbraco/models/LandingPage.generated.cs`

## Critical files to read before implementing

- `src/AmCom.Web/uSync/v17/ContentTypes/summary.config` — exact XML shape for element type
- `src/AmCom.Web/uSync/v17/ContentTypes/contentpage.config` — exact XML for page doc type with PageHeader composition
- `src/AmCom.Web/uSync/v17/ContentTypes/home.config` — pattern for BlockList property + Structure section
- `src/AmCom.Web/uSync/v17/DataTypes/Summaries.config` — BlockList datatype shape
- `src/AmCom.Web/uSync/v17/DataTypes/HorizontalPosition.config` — DropDown.Flexible shape
- `src/AmCom.Web/Views/Home.cshtml` and `src/AmCom.Web/Views/Partials/Summary.cshtml` — view + partial pattern
- `src/AmCom.Web/CSS/summary.css` — visual language to match (radius, padding, hover, light-dark)

## Out of scope (deferred)

- Filtering / tags / categories on cards
- Status field (Active / Archived / In Development) — design supports adding later via a new dropdown
- Refactor into `cardBase` composition with `visualProject` / `libraryProject` doc types — only worth it if filtering or per-type metadata is needed later
- Per-project detail pages (URL routing) — current model points cards at external URLs / existing detail pages via MultiUrlPicker
- Custom controller — not needed; default Umbraco routing handles `landingPage`

## Verification

End-to-end test sequence after implementation:

1. **Build** — `dotnet build` from solution root succeeds; npm CSS build picks up `cards.css`.
2. **uSync import** — start the site, log into backoffice, run uSync import. Confirm `card` element type, `landingPage` doc type, and both new datatypes appear under Settings.
3. **Create content** — create a `Projects` node under Home. Add 3 cards exercising all variants:
   - Hero card with screenshot (e.g. CodeHerd)
   - Standard card with screenshot (e.g. WranglerCI)
   - Standard card without screenshot (e.g. ASM Library)
4. **Render** — visit the Projects URL. Verify:
   - PageHeader renders with bg image + bone-coloured "Projects" title
   - Hero card spans 2×2 in the bento grid
   - Standard+image card spans 2×1, image and text side-by-side
   - Standard no-image card spans 1×1, text-only
   - Hover gives `translateY(-4px)` lift + deeper shadow on all variants
   - CTA pill is orange, arrow nudges right on hover
5. **Responsive** — Chrome devtools, step through breakpoints:
   - ≥992px: 4-col grid, hero 2×2
   - 768–991px: 2-col grid, hero 2×1
   - ≤767px: 1-col stack, all cards full width
6. **Light/dark mode** — toggle OS theme, confirm card backgrounds, text colour, brand colour, and shadows all swap via `light-dark()` and theme custom properties.
7. **Accessibility** — keyboard-tab through cards (entire card is `<a>`), confirm focus ring is visible, `aria-label` on link uses `linkLabel` or "View project" fallback, images have `alt` text.
8. **NoScript** — disable JS in devtools, reload. Cards must render and be clickable; only the `.reveal` animation degrades (cards visible immediately instead of animated in — already handled by existing `prefers-reduced-motion` and absence-of-`revealed` class behaviour, confirm).

## Implementation order

1. Add the two new DataType configs (Card+Size, Cards).
2. Add `card` element type config.
3. Add `landingpage` page doc type config (referencing the BlockList datatype) + Template config.
4. Modify `home.config` Structure to allow `landingpage` as a child.
5. Add `Views/LandingPage.cshtml` and `Views/Partials/Card.cshtml`.
6. Add `CSS/cards.css` and import in `site.css`.
7. Delete old `Content/projects.config`.
8. Build, run uSync, create test content, walk the verification checklist.
