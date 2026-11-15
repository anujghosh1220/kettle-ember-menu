import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import QrPage from "./pages/QrPage.tsx";
import NotFound from "./components/NotFound.tsx";

// Lightweight path routing — no router dependency needed for these routes.
const path = window.location.pathname.replace(/\/+$/, "") || "/";
const page =
  path === "/qr" ? <QrPage /> : path === "/" ? <App /> : <NotFound />;

createRoot(document.getElementById("root")!).render(
  <StrictMode>{page}</StrictMode>,
);
