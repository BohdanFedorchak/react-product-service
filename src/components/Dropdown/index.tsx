import { ReactNode, useRef } from "react";
import { cn } from "@/utils/cn";
import { useOnClickOutside } from "usehooks-ts";

interface IDropdownProps {
  children?: ReactNode;
  className?: string;
  onClickOutside?: (event: MouseEvent | TouchEvent) => void;
}

export default function Dropdown({
  children,
  className,
  onClickOutside,
}: IDropdownProps) {
  const ref = useRef(null);

  useOnClickOutside(ref, (event) => onClickOutside?.(event));
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 absolute right-3 top-[60px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44",
        className
      )}
    >
      {children && <>{children}</>}
    </div>
  );
}
