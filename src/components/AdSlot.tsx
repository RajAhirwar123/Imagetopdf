import { cn } from "@/lib/utils";

interface AdSlotProps {
  slot: string;
  format?: "horizontal" | "vertical" | "rectangle";
  className?: string;
}

const AdSlot = ({ slot, format = "horizontal", className }: AdSlotProps) => {
  const formatStyles = {
    horizontal: "min-h-[90px] md:min-h-[90px]", // Leaderboard 728x90
    vertical: "min-h-[600px] w-[160px]", // Skyscraper
    rectangle: "min-h-[250px] w-full max-w-[336px]", // Large Rectangle
  };

  return (
    <div
      className={cn(
        "w-full flex items-center justify-center bg-muted/50 border border-dashed border-border/60 rounded-lg overflow-hidden transition-all",
        formatStyles[format],
        className
      )}
    >
      {/* Google AdSense Code Placeholder */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height: "100%" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with your AdSense Publisher ID
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      
      {/* Placeholder text - remove after adding real ads */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-xs text-muted-foreground/50 font-medium">
          Advertisement
        </span>
      </div>
    </div>
  );
};

export default AdSlot;
