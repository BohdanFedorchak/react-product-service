import { cn } from "@/utils/cn";
import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface IInputProps {
  label?: string;
  labelClassName?: string;
  id?: string;
  inputClassName?: string;
  type?: HTMLInputTypeAttribute;
  inputChangedEvent?: ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
  label,
  labelClassName,
  id,
  inputClassName,
  type,
  inputChangedEvent,
}: IInputProps) {
  return (
    <div>
      <div className="flex items-center justify-center">
        <label
          htmlFor={id}
          className={cn(
            "block text-sm font-medium leading-6 text-gray-900",
            labelClassName
          )}
        >
          {label}
        </label>
      </div>
      <div className="mt-2">
        <input
          id={id}
          name={id}
          required
          type={type ?? "text"}
          className={cn(
            "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
            inputClassName
          )}
          onChange={inputChangedEvent}
        />
      </div>
    </div>
  );
}
