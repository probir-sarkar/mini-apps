import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PlayersProvider from "./contexts/players.context";
import "./index.scss";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PlayersProvider>
      <App />
    </PlayersProvider>{" "}
  </StrictMode>
);
