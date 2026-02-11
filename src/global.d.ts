interface Window {
  mixpanel?: {
    track: (event: string, properties?: Record<string, unknown>) => void;
  };
}
