# AndrewMcLachlan.com

Personal brand website built on Umbraco CMS. Contains info about Andrew McLachlan, code projects, blog posts, and interactive tools (regex tester, CIDR calculator, base64 encoder, colour explorer).

## Purpose and Design Philosophy

This is a **personal brand site** — it represents Andrew McLachlan professionally. The design must feel modern, polished, and distinctive. It should never look like a generic template or default Bootstrap site.

### Aesthetic Direction
- **Dark-first design** — the site defaults to a dark theme (`#091114` background) with a `prefers-color-scheme` light mode. Dark mode is the primary experience.
- **Colour palette** — deep navy/teal darks, blue accents (`#73BEE9` / `#3C74A8`), orange highlights (`#F7922D` / `#F55E00`), bone/cream for text on dark. Orange is used for active states and borders as an accent colour. Respect the existing palette; don't introduce new brand colours without reason.
- **Typography** — `Quicksand` (body, h1) for a clean, rounded, friendly feel; `Maven Pro` (h2-h6) for headings with a more geometric/modern character. Both are self-hosted. Maintain this typographic hierarchy.
- **Hero sections** — full-width hero images with overlaid text, semi-transparent dark containers with rounded corners. Photography-based backgrounds (travel/architecture).
- **Page headers** — full-width h2 elements with background photography, bold bone-coloured text with text shadow, bordered top and bottom with the accent colour.
- **Layout** — flexbox-based, full-height body. Minimal padding, clean content areas. Bootstrap is used for grid and nav but heavily customised.
- **Navigation** — lowercase nav links, bold active states in orange, brand name + logo right-aligned on desktop. Understated and clean.
- **Footer** — dark (`#14252C`), bone text, inline link list with pipe separators. Simple and unobtrusive.
- **Interactions** — subtle CSS transitions on links and hover states (0.15s ease-in-out). No heavy animations.
- **Gradient hr dividers** — decorative horizontal rules that fade from the edges, different gradients for light/dark modes.

### Design Principles
- Keep it **clean and spacious** — generous whitespace, don't crowd elements
- **Photography-forward** — travel and architecture photography is a key design element (headers, heroes)
- **Professionally distinctive** — should look like a developer's curated portfolio, not a corporate site or a blog template
- Maintain **dark/light mode parity** — all new UI must work in both themes using CSS custom properties (`--background-colour`, `--text-colour`, `--brand-colour`, `--border`, etc.)
- **Mobile responsive** — the site uses Bootstrap breakpoints with custom responsive overrides
- Avoid generic Bootstrap aesthetics — override defaults to maintain the site's own visual identity

## Tech Stack

- **Backend:** ASP.NET (.NET 10), Umbraco 17, C#
- **Frontend:** React 19, TypeScript, Redux Toolkit, Webpack, Sass
- **Hosting:** Azure App Service (staging slot swap deployment)
- **CI/CD:** GitHub Actions (`.github/workflows/build.yml`)

## Project Structure

```
AmCom.slnx                          # Solution file
src/Asm.AmCom.Web/                  # Main web project
  Controllers/                      # MVC controllers
  Models/                           # View models
  Views/                            # Razor views
  Scripts/
    React/                          # React app (tools UI)
      Components/                   # Shared React components
      Tools/                        # Tool pages (Regex, Cidr, Colours, Base64)
      Redux/                        # Redux store and slices
    Standard/                       # Non-React TypeScript
  CSS/                              # Sass source files
  wwwroot/                          # Static output (compiled CSS/JS)
  App_Plugins/                      # Umbraco plugins
  Config/                           # App configuration classes
  Middleware/                       # ASP.NET middleware
  Extensions/                      # Extension methods
  TagHelpers/                       # Razor tag helpers
tests/Asm.AmCom.Tests/              # Test project
```

## Build Commands

All npm commands run from `src/Asm.AmCom.Web/`:

```bash
dotnet build                        # Build .NET project (also triggers npm build)
dotnet publish                      # Publish for deployment
npm run build:dev                   # Webpack dev build
npm run build                       # Webpack production build
npm run build-sass                  # Compile all Sass files
npm run start                       # Webpack dev with watch
npm run watch-sass                  # Watch Sass files
```

The .csproj `NPM-Build` target automatically runs npm builds during `dotnet build`.

## Key Dependencies

- `Asm`, `Asm.AspNetCore.Mvc`, `Asm.Net` — custom shared libraries (from GitHub Packages)
- `Umbraco.StorageProviders.AzureBlob` — Azure blob storage for media
- `SixLabors.ImageSharp` — image processing
- `Serilog.Sinks.Seq` — structured logging

## Conventions

- Solution file is `.slnx` format: `AmCom.slnx`
- NuGet packages from GitHub Packages require `CROSS_REPO_PACKAGE_TOKEN`
- Razor compilation enabled in Release mode only
- `appsettings.*.json` files are excluded from publish
- Frontend has two TypeScript configs: `Scripts/React/tsconfig.json` and `Scripts/Standard/tsconfig.json`
