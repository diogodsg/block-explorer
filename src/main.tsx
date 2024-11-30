import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { BrowserRouter, Routes, Route } from "react-router";
import { App } from "./App";
import { UploadBlock } from "./upload-block/UploadBlock";
import { VerifyVote } from "./verify-vote/VerifyVote";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/upload" element={<UploadBlock />} />
        <Route path="/verify-vote" element={<VerifyVote />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
);
