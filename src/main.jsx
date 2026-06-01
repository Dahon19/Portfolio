const productionStylesheet = "/portfolio/assets/app-C45cyZTs.css";
const productionEntry = "/portfolio/assets/app-weu0CpE6.js";
const devHosts = new Set(["localhost", "127.0.0.1"]);
const devPorts = new Set(["4173", "5173", "5174", "5175"]);

function loadProductionEntry() {
  if (!document.querySelector(`link[href^="${productionStylesheet.split("?")[0]}"]`)) {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = productionStylesheet;
    document.head.appendChild(stylesheet);
  }

  return import(/* @vite-ignore */ productionEntry);
}

if (devHosts.has(window.location.hostname) && devPorts.has(window.location.port)) {
  import("./app-entry.jsx");
} else {
  loadProductionEntry();
}
