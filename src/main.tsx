import { createRoot } from "react-dom/client";
import mixpanel from "mixpanel-browser";
import App from "./App.tsx";
import "./index.css";

mixpanel.init("9d9500f50fc37afe7c0787d30cf78f6f", {
  debug: false,
  track_pageview: true,
  persistence: "localStorage",
  ignore_dnt: false,
  autocapture: true,
  record_sessions_percent: 100,
});
if (typeof window !== "undefined") {
  (window as Window & { mixpanel: typeof mixpanel }).mixpanel = mixpanel;
}

createRoot(document.getElementById("root")!).render(<App />);
