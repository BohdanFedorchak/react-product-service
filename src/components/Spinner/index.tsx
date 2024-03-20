import { cn } from "@/utils/cn";

interface ISpinnerProps {
  className?: string;
}

export default function Spinner({ className }: ISpinnerProps) {
  return (
    <div
      className={cn(
        "border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-black",
        className
      )}
    />
  );
}
