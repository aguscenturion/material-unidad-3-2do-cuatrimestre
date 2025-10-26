import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Section } from "./Section.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Section />
  </StrictMode>
);
