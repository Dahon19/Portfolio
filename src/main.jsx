const productionStylesheet = "/Portfolio/assets/app-Dwf491Ss.css?v=20260529-skills-cleanup";
const productionEntry = "/Portfolio/assets/app-CUuNGro8.js?v=20260529-skills-cleanup";
const devHosts = new Set(["localhost", "127.0.0.1"]);

function loadProductionEntry() {
  if (!document.querySelector(`link[href^="${productionStylesheet.split("?")[0]}"]`)) {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = productionStylesheet;
    document.head.appendChild(stylesheet);
  }

  return import(/* @vite-ignore */ productionEntry);
}

if (devHosts.has(window.location.hostname)) {
  import("./app-entry.jsx");
} else {
  loadProductionEntry();
}
