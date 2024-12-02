import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

function initializeWidget() {
  const container = document.getElementById("rp-widget");
  if (container) {
    const root = createRoot(container);
    const isWebflow = container.hasAttribute("data-is-webflow");
    root.render(<App isWebflow={isWebflow} />);
  } else {
    console.error("Container element not found");
  }
}

if (document.readyState === "complete") {
  // Page has already fully loaded
  initializeWidget();
} else {
  // Wait for the entire page to load
  window.addEventListener("load", initializeWidget);
}
