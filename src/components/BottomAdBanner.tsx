import { useEffect, useRef } from "react";

const BottomAdBanner = () => {
  const adRef = useRef(null);

  useEffect(() => {
    if (!adRef.current) return;

    // ❌ same script dubara inject na ho
    if (document.getElementById("adsterra-bottom-script")) return;

    const script = document.createElement("script");
    script.id = "adsterra-bottom-script";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src =
      "https://pl28255972.effectivegatecpm.com/c25723cecdad202717a2bd622f63f5b3/invoke.js";

    adRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full border-t py-4">
      <div className="container flex justify-center">
        {/* ✅ REQUIRED container (ID same hona chahiye) */}
        <div
          id="container-c25723cecdad202717a2bd622f63f5b3"
          ref={adRef}
          style={{
            width: "970px",
            minHeight: "90px",
            overflow: "hidden",
          }}
        />
      </div>
    </div>
  );
};

export default BottomAdBanner;
