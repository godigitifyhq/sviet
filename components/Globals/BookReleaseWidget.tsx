"use client";

import { useEffect } from "react";

export default function BookReleaseWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.in5.nopaperforms.com/emwgts.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="npf_wgts"
      data-height="600px"
      data-w="135f884902b93f3745b198105f33a948"
    />
  );
}
