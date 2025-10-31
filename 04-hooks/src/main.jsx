import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { About } from "./pages/About";
import { Form } from "./pages/Form";
import { App } from "./pages/App";
import { SimpleForm } from "./pages/SimpleForm";
import { MultipleCustomHooks } from "./pages/MultipleCustomHooks";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <MultipleCustomHooks />
  // </StrictMode>
);
