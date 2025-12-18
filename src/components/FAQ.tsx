import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this Image to PDF converter free to use?",
    answer:
      "Yes, this is a completely free online image to PDF converter. No signup, no watermark, and no hidden limits. You can convert unlimited JPG, PNG, or JPEG images directly in your browser.",
  },
  {
    question: "What image formats are supported?",
    answer:
      "We support JPG, JPEG, and PNG image formats. These formats cover photos, screenshots, and scanned documents commonly used for PDF conversion.",
  },
  {
    question: "Is my data secure? Are images uploaded to a server?",
    answer:
      "Your images are never uploaded to any server. All image to PDF conversion happens locally in your browser, ensuring 100% privacy and data security.",
  },
  {
    question: "Can I convert multiple images into one PDF file?",
    answer:
      "Yes, you can combine multiple images into a single PDF. Each image will be placed on a separate PDF page in the order you choose.",
  },
  {
    question: "Can I reorder images before converting to PDF?",
    answer:
      "Yes, you can easily drag and drop images to rearrange their order before converting them into a PDF document.",
  },
  {
    question: "Is there a file size or image limit?",
    answer:
      "There is no fixed limit. However, for smooth performance, we recommend keeping images under 10MB each and batches under 50 images.",
  },
  {
    question: "Does this Image to PDF converter work on mobile?",
    answer:
      "Yes, this online image to PDF converter works on mobile phones, tablets, and desktop devices without installing any app.",
  },
  {
    question: "Will the PDF quality be reduced?",
    answer:
      "No, the output PDF maintains the original image quality while fitting each image properly on the page without distortion.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      className="py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Image to PDF Converter – Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Common questions about our free online Image to PDF converter
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-medium pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Hidden SEO text */}
        <p className="sr-only">
          Free online image to PDF converter FAQs covering privacy, quality,
          supported formats, mobile usage, and security.
        </p>
      </div>
    </section>
  );
};

export default FAQ;
