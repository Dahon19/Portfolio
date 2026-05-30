const productionStylesheet = "/portfolio/assets/app-L_CLi57J.css?v=20260530-cinematic-tech-noir";
const productionEntry = "/portfolio/assets/app-ltvCbT1V.js?v=20260530-cinematic-tech-noir";
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
