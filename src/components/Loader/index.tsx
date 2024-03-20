import Spinner from "@/components/Spinner";
import { cn } from "@/utils/cn";

interface ILoaderProps {
  className?: string;
  spinnerClassName?: string;
}

export default function Loader({ className, spinnerClassName }: ILoaderProps) {
  return (
    <div
      className={cn("w-full h-hull flex justify-center self-center", className)}
    >
      <Spinner className={spinnerClassName} />
    </div>
  );
}
