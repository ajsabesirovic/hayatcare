"use client";

import { useEffect } from "react";

export function HashCleanup() {
  useEffect(() => {
    if (window.location.hash === "#_=_") {
      if (history.replaceState) {
        history.replaceState(null, "", window.location.href.split("#")[0]);
      } else {
        window.location.hash = "";
      }
    }
  }, []);

  return null;
}
