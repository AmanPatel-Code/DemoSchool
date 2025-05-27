import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function Heading({
  title,
  description,
  centered = false,
  className,
}: HeadingProps) {
  return (
    <div className={cn(
      "space-y-2 mb-8",
      centered && "text-center",
      className
    )}>
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      {description && (
        <p className="text-muted-foreground">{description}</p>
      )}
    </div>
  );
}