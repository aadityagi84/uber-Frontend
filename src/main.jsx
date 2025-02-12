import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./hooks/context/AuthContext.jsx";
import CaptainAuth from "./hooks/context/CaptainContext.jsx";

createRoot(document.getElementById("root")).render(
  <CaptainAuth>
    <AuthProvider>
      <BrowserRouter>
        <StrictMode>
          <App />
          <Toaster position="bottom-center " />
        </StrictMode>
      </BrowserRouter>
    </AuthProvider>
  </CaptainAuth>
);
