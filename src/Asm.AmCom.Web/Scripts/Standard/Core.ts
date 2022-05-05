document.addEventListener("DOMContentLoaded", () => {
    const elems: any = document.getElementsByClassName("theme-switch");
    for (const e of elems) {
        e.onclick = switchTheme;
    }

    const copyable: any = document.getElementsByClassName("copyable");
    for (const e of copyable) {
        e.onclick = copyToClipboard;
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