import { useEffect, useRef } from "react";

const TopAdBanner = () => {
  const adRef = useRef(null);

  useEffect(() => {
    if (!adRef.current) return;

    // 1️⃣ atOptions GLOBAL hona chahiye
    window.atOptions = {
      key: "b802f4c2b1e67369f5fb33a19a96592d",
      format: "iframe",
      height: 90,
      width: 728,
      params: {},
    };

    // 2️⃣ Script dynamically load karo
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://www.highperformanceformat.com/b802f4c2b1e67369f5fb33a19a96592d/invoke.js";
    script.async = true;

    adRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full flex justify-center py-3 border-b">
      <div
        ref={adRef}
        style={{
          width: "728px",
          height: "90px",
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default TopAdBanner;
