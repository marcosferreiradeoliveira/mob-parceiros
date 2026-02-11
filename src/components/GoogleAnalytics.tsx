import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageview } from "@/lib/analytics";

/**
 * Envia page_view ao GA4 na carga inicial e a cada mudança de rota (SPA).
 */
const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return null;
};

export default GoogleAnalytics;
