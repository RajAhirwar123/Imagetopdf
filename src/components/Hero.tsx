import { Sparkles, Zap, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/20 to-transparent blur-3xl rounded-full" />
      
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span>100% Free • No Registration Required</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Convert Images to PDF
            <br />
            <span className="gradient-text">Instantly & Free</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Transform your JPG, JPEG, and PNG images into a single PDF document. 
            Drag, drop, reorder, and download — all in your browser, no upload to servers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-4 w-4 text-primary" />
              </div>
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <span>100% Private</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <span>No Limits</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
