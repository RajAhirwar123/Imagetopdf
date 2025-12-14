import { useEffect } from "react";

const InContentAd = () => {

  // ⭐ Load Adsterra script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl.adsterra.com/a/ABCDEF.js"; // <-- Yaha AAPKA script URL
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full py-6">
      <div className="container">
        <div className="flex items-center justify-center">

          {/* ⭐ Adsterra In-Content Ad Box */}
          <div className="w-full max-w-[336px] min-h-[280px] bg-muted/20 border border-dashed border-border/40 rounded-xl flex items-center justify-center relative">

            {/* ⭐ Actual Adsterra Zone */}
            <div
              className="ad-container"
              data-zone="1234567"   // <-- Yaha AAPKA zone id
              style={{ width: "336px", height: "280px" }}
            ></div>

            {/* Placeholder – will auto-hide when ads load */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-xs text-muted-foreground/50">
                Loading Ad…
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default InContentAd;
