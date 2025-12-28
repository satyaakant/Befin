"use client";

import { useEffect, useState } from "react";

const LOGO_URL =
  "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/height:2000/https://cdn.gamma.app/sw127renn5q43az/2fcac0566ef3447d88d894be587c87cb/original/befin-logo-final.png";

export default function HomeLoader({ minDurationMs = 900 }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem("befin_home_loader_seen") === "1";
      if (seen) {
        setOpen(false);
        return;
      }
      sessionStorage.setItem("befin_home_loader_seen", "1");
    } catch {
      // ignore
    }

    const t = window.setTimeout(() => setOpen(false), minDurationMs);
    return () => window.clearTimeout(t);
  }, [minDurationMs]);

  if (!open) return null;

  return (
    <div className="loader" role="status" aria-live="polite" aria-label="Loading">
      <div className="loader-card">
        <div className="loader-mark">
          <img src={LOGO_URL} alt="" />
        </div>
        <div className="loader-title">Befin</div>
        <div className="loader-sub">Preparing your experience</div>
        <div className="loader-bar" aria-hidden="true">
          <div className="loader-bar-fill" />
        </div>
      </div>
    </div>
  );
}
