document.addEventListener("DOMContentLoaded", () => {
    const elems: any = document.getElementsByClassName("theme-switch");
    for (const e of elems) {
        e.onclick = switchTheme;
    }

    const copyable: any = document.getElementsByClassName("copyable");
    for (const e of copyable) {
        e.onclick = copyToClipboard;
    }

    // Toggle scrolled class on nav for glassmorphism effect
    const nav = document.getElementById("top-nav");
    if (nav) {
        window.addEventListener("scroll", () => {
            nav.classList.toggle("scrolled", window.scrollY > 10);
        }, { passive: true });
    }

    // Navbar collapse toggle (replaces Bootstrap JS)
    const toggler = document.querySelector(".navbar-toggler");
    const collapseEl = document.getElementById("navbarSupportedContent");
    if (toggler && collapseEl) {
        toggler.addEventListener("click", () => {
            collapseEl.classList.toggle("show");
            toggler.setAttribute("aria-expanded",
                collapseEl.classList.contains("show").toString());
        });
    }

    // Scroll-reveal animation using IntersectionObserver
    const revealContainers = document.querySelectorAll(".reveal-group");
    const standaloneReveals = document.querySelectorAll(".reveal:not(.reveal-group .reveal)");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
        document.querySelectorAll(".reveal").forEach(el => el.classList.add("revealed"));
    } else {
        // For grouped reveals: observe the container, reveal all children when container scrolls into view
        revealContainers.forEach(container => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        container.querySelectorAll(".reveal").forEach(el => el.classList.add("revealed"));
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0, rootMargin: "0px 0px 0px 0px" });

            observer.observe(container);
        });

        // For standalone reveals
        if (standaloneReveals.length > 0) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("revealed");
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0, rootMargin: "0px 0px 0px 0px" });

            standaloneReveals.forEach(el => observer.observe(el));
        }
    }
});

type Theme = "light" | "dark";

const prefersDark = "(prefers-color-scheme: dark)";
const prefersLight = "(prefers-color-scheme: light)";

const mqDark = window.matchMedia(prefersDark);
mqDark.addEventListener("change", listener);
const mqLight = window.matchMedia(prefersLight)
mqLight.addEventListener("change", listener);

setInitialTheme();

function listener(e: MediaQueryListEvent) {
    if(!e.matches || hasThemeOverride()) { // Not matching anymore = not interesting
        return;
    }

    if(e.media === prefersDark) {
        changeWebsiteTheme("dark");
    } else if (e.media === prefersLight) {
        changeWebsiteTheme("light");
    }
}

function setInitialTheme() {
    const theme = window.localStorage.getItem("theme");

    if (theme as Theme) {
        changeWebsiteTheme(theme as Theme);
    }
    else if (mqDark.matches) {
        changeWebsiteTheme("dark");
    }
    else {
        changeWebsiteTheme("light");
    }
}

function switchTheme(e: MouseEvent) {

    const body = document.getElementsByTagName("body")[0];

    let theme: Theme = "light";

    if (hasThemeOverride()) {
        theme = body.classList.contains("dark") ? "light" : "dark";
    }
    else {
        theme = mqDark.matches ? "light" : "dark";
    }

    window.localStorage.setItem("theme", theme);

    changeWebsiteTheme(theme);
}

function hasThemeOverride()
{
    return window.localStorage.getItem("theme") !== null;
}

function changeWebsiteTheme(theme: Theme) {

    const body = document.getElementsByTagName("body")[0];
    const nav = document.getElementById("top-nav");
    body.classList.remove("dark");
    body.classList.remove("light");
    body.classList.add(theme.toLowerCase());

    nav.classList.remove("navbar-dark");
    nav.classList.remove("navbar-light");
    nav.classList.add(`navbar-${theme.toLowerCase()}`);
}

function copyToClipboard (e: MouseEvent) {
    const target = e.currentTarget as HTMLElement;
    target.innerText && navigator.clipboard.writeText(target.innerText);
}