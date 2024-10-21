import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import RouletteContextProvider from "./context/RouletteContext.tsx";
import BettingContextProvider from "./context/BettingContext.tsx";

createRoot(document.getElementById("root")!).render(
  <RouletteContextProvider>
    <BettingContextProvider>
      <App />
    </BettingContextProvider>
  </RouletteContextProvider>,
);
