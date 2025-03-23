import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

console.log("main.tsx is executing");

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Failed to find the root element");
} else {
  console.log("Root element found, rendering app");
  createRoot(rootElement).render(<App />);
}
