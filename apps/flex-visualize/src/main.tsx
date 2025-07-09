import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FlexProvider } from "./context-provider.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <FlexProvider>
        <App />
      </FlexProvider>
    </ThemeProvider>
  </StrictMode>
);
