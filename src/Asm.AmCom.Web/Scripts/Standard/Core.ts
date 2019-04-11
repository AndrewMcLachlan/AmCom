document.addEventListener("DOMContentLoaded", () => {
    const elems: any = document.getElementsByClassName("theme-switch");
    for (const e of elems) {
        e.onclick = switchTheme;
    }
});

function switchTheme(e: MouseEvent) {

    const body = document.getElementsByTagName("body")[0];

    const theme = body.classList.contains("dark") ? "Light" : "Dark";
    const oldTheme = body.classList.contains("dark") ? "Dark" : "Light";

    document.cookie = `theme=${theme};path=/;max-age=3156000`;

    (e.target as HTMLElement).innerText = `${oldTheme} Theme`;

    body.classList.remove("dark");
    body.classList.remove("light");
    body.classList.add(theme.toLowerCase());
}
