import { useState, useCallback, useRef } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { Upload, FileImage, Download, Trash2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImagePreview from "./ImagePreview";
import { jsPDF } from "jspdf";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface ImageFile {
  id: string;
  file: File;
  preview: string;
}

const ImageConverter = () => {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files) return;

    const validTypes = ["image/jpeg", "image/jpg", "image/png"];
    const newImages: ImageFile[] = [];

    Array.from(files).forEach((file) => {
      if (validTypes.includes(file.type)) {
        const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const preview = URL.createObjectURL(file);
        newImages.push({ id, file, preview });
      }
    });

    if (newImages.length === 0) {
      toast({
        title: "Invalid file type",
        description: "Please select JPG, JPEG, or PNG images only.",
        variant: "destructive",
      });
      return;
    }

    // Clear previous PDF when new images are added
    setPdfBlob(null);
    setImages((prev) => [...prev, ...newImages]);
    toast({
      title: "Images added",
      description: `${newImages.length} image${newImages.length > 1 ? "s" : ""} added successfully.`,
    });
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setImages((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const removeImage = (id: string) => {
    setImages((prev) => {
      const image = prev.find((img) => img.id === id);
      if (image) URL.revokeObjectURL(image.preview);
      return prev.filter((img) => img.id !== id);
    });
    setPdfBlob(null); // Clear PDF when image is removed
  };

  const clearAll = () => {
    images.forEach((img) => URL.revokeObjectURL(img.preview));
    setImages([]);
    setPdfBlob(null); // Clear PDF when all images cleared
    toast({
      title: "Cleared",
      description: "All images have been removed.",
    });
  };

  const convertToPDF = async () => {
    if (images.length === 0) return;

    setIsConverting(true);

    try {
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
      });

      for (let i = 0; i < images.length; i++) {
        const img = images[i];
        
        // Load image to get dimensions
        const imgElement = await new Promise<HTMLImageElement>((resolve, reject) => {
          const image = new Image();
          image.onload = () => resolve(image);
          image.onerror = reject;
          image.src = img.preview;
        });

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        
        // Calculate scaling to fit image within page while maintaining aspect ratio
        const imgRatio = imgElement.width / imgElement.height;
        const pageRatio = pageWidth / pageHeight;
        
        let finalWidth, finalHeight;
        
        if (imgRatio > pageRatio) {
          finalWidth = pageWidth - 40;
          finalHeight = finalWidth / imgRatio;
        } else {
          finalHeight = pageHeight - 40;
          finalWidth = finalHeight * imgRatio;
        }

        const x = (pageWidth - finalWidth) / 2;
        const y = (pageHeight - finalHeight) / 2;

        if (i > 0) {
          pdf.addPage();
        }

        pdf.addImage(img.preview, "JPEG", x, y, finalWidth, finalHeight);
      }

      // Create blob instead of auto-downloading
      const pdfOutput = pdf.output("blob");
      setPdfBlob(pdfOutput);

      toast({
        title: "PDF Ready!",
        description: `${images.length} image${images.length > 1 ? "s" : ""} converted. Click Download to save.`,
      });
    } catch (error) {
      toast({
        title: "Conversion Failed",
        description: "An error occurred while creating the PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsConverting(false);
    }
  };

  const downloadPDF = () => {
    if (!pdfBlob) return;
    
    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "converted-images.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast({
      title: "Downloaded!",
      description: "Your PDF has been saved.",
    });
  };

  return (
    <section id="converter" className="py-12 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          {/* Main converter card */}
          <div className="card-elevated rounded-2xl md:rounded-3xl border border-border/50 p-6 md:p-8 lg:p-10">
            {/* Upload area */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={cn(
                "relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 md:p-12 cursor-pointer transition-all duration-300",
                isDragging
                  ? "border-primary bg-primary/5 scale-[1.02]"
                  : "border-border hover:border-primary/50 hover:bg-muted/50"
              )}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/jpg,image/png"
                multiple
                onChange={(e) => handleFiles(e.target.files)}
                className="hidden"
              />
              
              <div className={cn(
                "flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl transition-all duration-300",
                isDragging ? "bg-primary text-primary-foreground scale-110" : "bg-gradient-to-br from-primary/10 to-accent/10"
              )}>
                <Upload className={cn(
                  "h-8 w-8 md:h-10 md:w-10 transition-colors",
                  isDragging ? "text-primary-foreground" : "text-primary"
                )} />
              </div>
              
              <h3 className="mt-4 text-lg md:text-xl font-semibold text-foreground">
                {isDragging ? "Drop images here" : "Drag & Drop Images"}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground text-center">
                or click to browse • JPG, JPEG, PNG supported
              </p>
            </div>

            {/* Image previews */}
            {images.length > 0 && (
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-foreground">
                    {images.length} image{images.length > 1 ? "s" : ""} selected
                  </h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAll}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear All
                  </Button>
                </div>

                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                >
                  <SortableContext items={images.map((img) => img.id)} strategy={rectSortingStrategy}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                      {images.map((image, index) => (
                        <ImagePreview
                          key={image.id}
                          id={image.id}
                          src={image.preview}
                          name={image.file.name}
                          index={index}
                          onRemove={() => removeImage(image.id)}
                        />
                      ))}
                    </div>
                  </SortableContext>
                </DndContext>

                <p className="mt-4 text-xs text-center text-muted-foreground">
                  💡 Tip: Drag images to reorder them in the final PDF
                </p>
              </div>
            )}

            {/* Convert button */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              {!pdfBlob ? (
                <Button
                  variant="hero"
                  size="xl"
                  onClick={convertToPDF}
                  disabled={images.length === 0 || isConverting}
                  className="w-full sm:w-auto min-w-[200px]"
                >
                  {isConverting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Converting...
                    </>
                  ) : (
                    <>
                      <FileImage className="h-5 w-5" />
                      Convert to PDF
                    </>
                  )}
                </Button>
              ) : (
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button
                    variant="hero"
                    size="xl"
                    onClick={downloadPDF}
                    className="w-full sm:w-auto min-w-[200px]"
                  >
                    <Download className="h-5 w-5" />
                    Download PDF
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setPdfBlob(null)}
                    className="w-full sm:w-auto"
                  >
                    Convert Again
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageConverter;
