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

// Fresh visits always open at the hero. Manual scroll restoration stops
// browsers re-applying an old position; intentional #hash links (e.g.
// #menu) are left to the browser's native anchor handling.
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
if (!window.location.hash) {
  window.scrollTo(0, 0);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>{page}</StrictMode>,
);
