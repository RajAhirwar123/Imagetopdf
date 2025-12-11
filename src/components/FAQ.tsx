import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this Image to PDF converter free to use?",
    answer: "Yes! Our Image to PDF converter is completely free with no hidden costs. There's no registration required, no watermarks on your PDFs, and no limits on how many conversions you can do.",
  },
  {
    question: "What image formats are supported?",
    answer: "We support the most common image formats: JPG, JPEG, and PNG. These formats cover the vast majority of images you'll encounter, from photos to screenshots and graphics.",
  },
  {
    question: "Is my data secure? Are images uploaded to a server?",
    answer: "Your images never leave your device. All processing happens directly in your browser using JavaScript. We don't upload, store, or have access to any of your images. Your files remain 100% private.",
  },
  {
    question: "Can I convert multiple images into one PDF?",
    answer: "Absolutely! You can select multiple images at once or add them one by one. All selected images will be combined into a single PDF file, with each image on its own page.",
  },
  {
    question: "Can I reorder images before converting to PDF?",
    answer: "Yes! After uploading your images, you can drag and drop them to rearrange the order. The final PDF will maintain the exact order you've arranged.",
  },
  {
    question: "What's the maximum file size or number of images allowed?",
    answer: "There's no strict limit, but performance depends on your device. For best results, we recommend keeping individual images under 10MB and batch conversions under 50 images. Larger batches may take longer to process.",
  },
  {
    question: "Does this work on mobile devices?",
    answer: "Yes! Our converter is fully responsive and works on smartphones, tablets, and desktop computers. You can even use the drag-and-drop feature on touch devices.",
  },
  {
    question: "What's the quality of the output PDF?",
    answer: "The PDF maintains the original quality of your images. Images are scaled to fit the page while preserving their aspect ratio, ensuring they look great in the final document.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our Image to PDF converter
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
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
