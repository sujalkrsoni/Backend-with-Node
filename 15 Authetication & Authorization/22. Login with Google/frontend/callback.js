// Sending Message from popup
if (window.name === "auth-popup") {
  // console.log("Running JS inside Popup ...");
  const code = new URLSearchParams(window.location.search).get("code");
  if (code) {
    window.opener.postMessage({ code });
    window.close();
  }
}

console.log("Running callback.js")
