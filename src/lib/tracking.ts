// Tracking utilities for Meta Pixel, Google Tag Manager, and Google Analytics 4

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// ============ Meta Pixel (Facebook Pixel) ============

export function initMetaPixel(pixelId: string) {
  if (typeof window === "undefined") return;

  window.fbq = function (...args: unknown[]) {
    if (typeof (window.fbq as unknown as { callMethod?: unknown }).callMethod === "function") {
      ((window.fbq as unknown as { callMethod: (...a: unknown[]) => void })).callMethod(...args);
    } else {
      ((window.fbq as unknown as { queue: unknown[] })).queue.push(args);
    }
  };
  (window as unknown as { _fbq: typeof window.fbq })._fbq = window.fbq;
  window.fbq("init", pixelId);
  window.fbq("track", "PageView");
}

export function trackMetaEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", eventName, params);
}

export function trackLead(value?: number, currency: string = "DZD") {
  trackMetaEvent("Lead", { value, currency });
}

// ============ Google Tag Manager ============

export function initGTM(gtmId: string) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });
}

export function pushToDataLayer(data: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
}

// ============ Google Analytics 4 ============

export function initGA4(measurementId: string) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    page_path: window.location.pathname,
  });
}

export function trackGA4Event(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, params);
}

export function trackGA4Lead(value?: number, currency: string = "DZD") {
  trackGA4Event("lead", { value, currency });
}

export function trackGA4PageView(path?: string) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path || window.location.pathname,
  });
}

// ============ Combined Tracking ============

export function trackConversion(value?: number) {
  // Track on all platforms simultaneously
  trackLead(value);
  trackGA4Lead(value);
  pushToDataLayer({
    event: "conversion",
    eventCategory: "order",
    eventAction: "submit",
    eventValue: value,
  });
}

export function trackPageView() {
  // PageView is automatically tracked by Meta Pixel init
  // and GA4 config, but we can push to GTM dataLayer
  pushToDataLayer({
    event: "page_view",
    page_path: typeof window !== "undefined" ? window.location.pathname : "/",
  });
}
