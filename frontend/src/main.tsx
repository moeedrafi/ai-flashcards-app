import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "@/context/AuthContext.tsx";
import { DeckProvider } from "@/context/DeckContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DeckProvider>
          <App />
        </DeckProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
