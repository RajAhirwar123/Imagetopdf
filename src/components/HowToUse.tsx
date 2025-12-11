import { Upload, MousePointerClick, Download, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Images",
    description: "Drag and drop your JPG, JPEG, or PNG images into the upload area, or click to browse files.",
  },
  {
    icon: MousePointerClick,
    title: "Arrange Order",
    description: "Drag images to reorder them. The order shown will be the page order in your final PDF.",
  },
  {
    icon: Download,
    title: "Download PDF",
    description: "Click 'Convert to PDF' and your file will be created and download.",
  },
];

const HowToUse = () => {
  return (
    <section id="how-to-use" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How to Use <span className="gradient-text">Image to PDF</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Convert your images to PDF in three simple steps
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow h-full">
                  {/* Step number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-4">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>

                {/* Arrow between steps (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
