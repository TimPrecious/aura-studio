"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback) {
  window.addEventListener("focus", callback);
  document.addEventListener("visibilitychange", callback);

  return () => {
    window.removeEventListener("focus", callback);
    document.removeEventListener("visibilitychange", callback);
  };
}

function getYear() {
  return new Date().getFullYear();
}

export default function CopyrightYear() {
  const year = useSyncExternalStore(subscribe, getYear, () => null);
  return year;
}
