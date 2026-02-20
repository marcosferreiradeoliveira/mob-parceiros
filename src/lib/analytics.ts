/**
 * Google Analytics 4 - mobCONTENT
 * Measurement ID: G-NM2XMDD1TL
 */

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const MEASUREMENT_ID = "G-NM2XMDD1TL";

export const pageview = (path: string, title?: string) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: path,
      page_title: title ?? document.title,
    });
  }
};

export const event = (name: string, params?: Record<string, unknown>) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
};

/** Rastreia clique no WhatsApp no Mixpanel e no GA4. origem: "header" | "formulario" | "flutuante" */
export const trackWhatsAppClick = (origem: string) => {
  event("whatsapp_click", { event_category: "engagement", event_label: origem, origem });
  const w = window as Window & { mixpanel?: { track: (e: string, p?: Record<string, unknown>) => void } };
  w.mixpanel?.track("WhatsApp - Clique", { origem });
};

export { MEASUREMENT_ID };
