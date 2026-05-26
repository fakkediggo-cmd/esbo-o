const toggle = document.getElementById("themeToggle");
const flash = document.getElementById("themeFlash");
const html = document.documentElement;

toggle.addEventListener("click", () => {
  const isBW = html.getAttribute("data-theme") === "bw";
  const nextTheme = isBW ? "color" : "bw";

  // brief flash for emphasis
  flash.style.opacity = "0.06";
  setTimeout(() => {
    flash.style.opacity = "0";
  }, 250);

  html.setAttribute("data-theme", nextTheme);

  // update aria-label
  toggle.setAttribute(
    "aria-label",
    nextTheme === "bw" ? "Ativar modo colorido" : "Ativar modo preto e branco",
  );
});
