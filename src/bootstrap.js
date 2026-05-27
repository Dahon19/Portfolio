const isLocalHost = ["localhost", "127.0.0.1"].includes(window.location.hostname);

if (isLocalHost) {
  import("./main.jsx");
} else {
  import(/* @vite-ignore */ "/Portfolio/assets/main.js");
}
