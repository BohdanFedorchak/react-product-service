import { ReactNode } from "react";

interface ICardProps {
  title?: string;
  img?: string;
  price?: string | number;
  desctiption?: string;
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Card({
  title,
  children,
  img,
  price,
  desctiption,
  onClick,
}: ICardProps) {
  return (
    <div
      onClick={() => onClick}
      className="border border-gray-200 shadow-md hover:shadow-2xl flex flex-col content-center items-center cursor-pointer group"
    >
      <div className="aspect-square overflow-hidden">
        <img
          className="w-full h-full object-cover ease-out duration-300 group-hover:scale-110"
          src={img}
          alt=""
        />
      </div>
      <div className="p-4 w-full text-center flex flex-1 flex-col">
        {title && (
          <h4 className="mb-2 font-sans text-xl min-h-[56px] font-semibold">
            {title}
          </h4>
        )}
        {desctiption && (
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit h-24 overflow-y-auto mb-4">
            {desctiption}
          </p>
        )}
        {price && (
          <div className="text-right mt-auto text-green-500 text-lg font-medium">
            ${price}
          </div>
        )}
        {children && <div>{children}</div>}
      </div>
    </div>
  );
}
