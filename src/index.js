import { createRoot } from "react-dom/client";
import React from "react";
import App from "./components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);