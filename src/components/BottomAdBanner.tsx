import { useEffect } from "react";

const BottomAdBanner = () => {

  // ⭐ Load Adsterra script dynamically (required)
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl.adsterra.com/a/ABCDEF.js"; // <-- Yaha AAPKA script URL
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-muted/30 border-t border-border/40 py-4">
      <div className="container">
        <div className="flex items-center justify-center">

          {/* ⭐ Adsterra Bottom Banner */}
          <div className="w-full max-w-[970px] min-h-[90px] bg-muted/20 border border-dashed border-border/40 rounded-lg flex items-center justify-center relative overflow-hidden">

            {/* ⭐ Actual Adsterra Zone */}
            <div
              className="ad-container"
              data-zone="1234567"   // <-- Yaha AAPKA Zone ID
              style={{ width: "970px", height: "90px" }}
            ></div>

            {/* Placeholder until ad loads */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xs text-muted-foreground/50 font-medium">
                Loading Ad…
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default BottomAdBanner;
