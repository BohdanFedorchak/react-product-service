import { ReactNode, useRef } from "react";
import { cn } from "@/utils/cn";

interface IDropdownProps {
  list?: ReactNode[] | JSX.Element[];
  className?: string;
  listItemClassName?: string;
}

export default function DropdownList({
  list,
  className,
  listItemClassName,
}: IDropdownProps) {
  return (
    <>
      {list && (
        <ul className={cn(className)}>
          {list.map((listItem) => (
            <li className={cn(listItemClassName)} key={Math.random()}>
              {listItem}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
