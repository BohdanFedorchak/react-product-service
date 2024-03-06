import { ChangeEventHandler } from "react";
import { IAdditionalClassesList } from "@/interfaces/commonProps.ts";

interface SearchInputProps {
  iconClassName?: string;
  placeholder?: string;
  onInputChanged?: ChangeEventHandler<HTMLInputElement>;
}

const classesList: IAdditionalClassesList = {
  "pl-10": "pl-10",
};

export default function SearchInput({
  iconClassName,
  placeholder,
  onInputChanged,
}: SearchInputProps) {
  return (
    <div className="relative">
      {iconClassName && (
        <i
          className={`${iconClassName} absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-500`}
        ></i>
      )}
      <input
        className={`h-11 w-402 border border-gray-200 text-gray-900 text-sm rounded-2xl bg-gray-50 placeholder:text-gray-500 ${iconClassName && classesList["pl-10"]}`}
        type="text"
        placeholder={placeholder}
        onChange={onInputChanged}
      />
    </div>
  );
}
