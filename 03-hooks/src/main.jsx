import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { About } from "./pages/About";
import { Form } from "./pages/Form";
import { App } from "./pages/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
