import { Upload, MousePointerClick, Download, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Images",
    description:
      "Upload JPG, JPEG, or PNG images directly in your browser. No signup, no file upload to any server.",
  },
  {
    icon: MousePointerClick,
    title: "Arrange & Preview",
    description:
      "Reorder images easily to set the correct page order before converting them into a PDF file.",
  },
  {
    icon: Download,
    title: "Convert & Download PDF",
    description:
      "Click convert and instantly download your PDF. Fast, free, secure, and without watermark.",
  },
];

const HowToUse = () => {
  return (
    <section
      id="how-to-use"
      className="py-16 md:py-24 bg-muted/30"
      aria-labelledby="how-to-use-heading"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          {/* SEO strong H2 */}
          <h2
            id="how-to-use-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            How to Convert Images to PDF Online for Free
          </h2>

          {/* CTR friendly subtext */}
          <p className="text-muted-foreground text-lg">
            Convert images to PDF in seconds — no upload, no signup, and 100% secure
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
                  <h3 className="text-lg font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Hidden SEO text */}
        <p className="sr-only">
          This free online image to PDF converter allows you to convert JPG, PNG, and JPEG images into PDF securely without uploading files.
        </p>
      </div>
    </section>
  );
};

export default HowToUse;
