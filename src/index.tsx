import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";

const container = document.getElementById("rp-widget");
if (container) {
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<App />);
} else {
  console.error("Container element not found");
}
