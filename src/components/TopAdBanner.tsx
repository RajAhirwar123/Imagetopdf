import { useEffect } from "react";

const TopAdBanner = () => {

  // ⭐ STEP 1: Adsterra Script Load
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl.adsterra.com/a/XXXXXXXXXX.js"; // ⭐ Yaha apna Adsterra script link paste karo
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-muted/30 border-b border-border/40 py-3">
      <div className="container">
        <div className="flex items-center justify-center">

          {/* ⭐ STEP 2: Adsterra Zone ID */}
          <div className="w-full max-w-[728px] min-h-[90px] border border-dashed border-border/50 rounded-lg flex items-center justify-center relative overflow-hidden">

            <ins
              className="adsbyadsterra"
              data-zone="1234567"  // ⭐ Yaha apna Zone ID paste karo
              style={{ display: "block", width: "100%", height: "90px" }}
            ></ins>

            {/* Placeholder - sirf ad load hone tak dikhayega */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
              <span className="text-xs text-muted-foreground/60 font-medium">
                Adsterra - Top Banner (728x90)
              </span>
              <span className="text-[10px] text-muted-foreground/40 mt-1">
                Loading advertisement…
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TopAdBanner;
