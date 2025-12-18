import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import Layout from "./layouts/Layout.tsx";
import ItemsPage from "./views/ItemsPage.tsx";
import NotFound from "./views/NotFound.tsx";
import RoutinesPage from "./views/RoutinesPage.tsx";
import StatsPage from "./views/StatsPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/routines" element={<RoutinesPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/about" element={<StatsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
