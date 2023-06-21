export function setDarkModeVariables() {
    document.body.classList.remove("light");
    document.body.classList.add("dark");

    document.documentElement.style.setProperty("--clr-base-1", "#1b1b1b");
    document.documentElement.style.setProperty("--clr-base-2", "rgba(217, 217, 217, 0.1)");
    document.documentElement.style.setProperty("--clr-base-3", "rgba(165, 102, 255, 0.22)");
    document.documentElement.style.setProperty("--clr-text", "#ffffff");
    document.documentElement.style.setProperty("--clr-background", "#000");
    document.documentElement.style.setProperty("--clr-border", "rgba(255, 255, 255, 0.1)");
    document.documentElement.style.setProperty("--clr-primary", "var(--clr-purple)");
    document.documentElement.style.setProperty("--theme", "dark");
}

export function setLightModeVariables() {
    document.body.classList.remove("dark");
    document.body.classList.add("light");

    document.documentElement.style.setProperty("--clr-base-1", "#fff");
    document.documentElement.style.setProperty("--clr-base-2", "rgba(255, 255, 255, 0.06)");
    document.documentElement.style.setProperty("--clr-base-3", "rgba(198, 198, 198, 0.22)");
    document.documentElement.style.setProperty("--clr-text", "#000");
    document.documentElement.style.setProperty("--clr-background", "#fff");
    document.documentElement.style.setProperty("--clr-border", "rgba(0,0,0,0.1");
    document.documentElement.style.setProperty("--clr-primary", "var(--clr-yellow)");
    document.documentElement.style.setProperty("--theme", "light");
}
