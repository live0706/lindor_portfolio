import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// initialize scroll reveal helpers (adds `is-revealed` to `.reveal` elements)
import initScrollReveal from './lib/scroll-reveal';
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// run after a tick so mounted elements exist
setTimeout(() => initScrollReveal(document), 160);
