import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { X, GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePreviewProps {
  id: string;
  src: string;
  name: string;
  index: number;
  onRemove: () => void;
}

const ImagePreview = ({ id, src, name, index, onRemove }: ImagePreviewProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "group relative flex flex-col items-center rounded-xl border-2 border-border bg-card p-2 transition-all duration-200",
        isDragging ? "z-50 shadow-xl scale-105 border-primary" : "hover:border-primary/50 hover:shadow-md"
      )}
    >
      {/* Drag handle */}
      <button
        {...attributes}
        {...listeners}
        className="absolute top-2 left-2 flex h-6 w-6 items-center justify-center rounded-md bg-muted/80 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing"
      >
        <GripVertical className="h-4 w-4 text-muted-foreground" />
      </button>

      {/* Remove button */}
      <button
        onClick={onRemove}
        className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-destructive text-destructive-foreground opacity-0 group-hover:opacity-100 transition-all hover:scale-110 shadow-md z-10"
      >
        <X className="h-3 w-3" />
      </button>

      {/* Image number badge */}
      <div className="absolute top-2 right-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-primary px-2 text-xs font-bold text-primary-foreground shadow-sm">
        {index + 1}
      </div>

      {/* Image thumbnail */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-muted">
        <img
          src={src}
          alt={name}
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>

      {/* File name */}
      <p className="mt-2 w-full truncate text-center text-xs text-muted-foreground px-1">
        {name}
      </p>
    </div>
  );
};

export default ImagePreview;
