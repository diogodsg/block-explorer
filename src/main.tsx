import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { App } from "./App";
import { UploadBlock } from "./upload-block/UploadBlock";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/upload" element={<UploadBlock />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
