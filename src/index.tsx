import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

function initializeWidget() {
  const container = document.getElementById("rp-widget");
  if (container) {
    const existingRoot = (container as any)._reactRootContainer;
    if (!existingRoot) {
      const root = createRoot(container);
      const isWebflow = container.hasAttribute("data-is-webflow");
      root.render(<App isWebflow={isWebflow} />);
      (container as any)._reactRootContainer = root;
    }
  } else {
    console.error("Container element not found");
  }
}

function handleLoadEvent() {
  initializeWidget();
  window.removeEventListener("load", handleLoadEvent);
}

if (document.readyState === "complete") {
  // Page has already fully loaded
  initializeWidget();
} else {
  // Wait for the entire page to load and only add the event listener once
  window.addEventListener("load", handleLoadEvent);
}
