import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";

const container = document.getElementById("rp-widget");
if (container) {
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  const isWebflow = container.hasAttribute("data-is-webflow");
  root.render(<App isWebflow={isWebflow} />);
} else {
  console.error("Container element not found");
}
