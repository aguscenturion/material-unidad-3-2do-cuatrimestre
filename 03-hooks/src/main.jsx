import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { About } from "./pages/About";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <About />
  </StrictMode>
);
