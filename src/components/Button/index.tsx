import clsx from "clsx";
import { forwardRef } from "react";

interface IButtonOptions {
  variant?: IButtonVariant;
  color?: IButtonColorVariant;
}

type Ref = HTMLButtonElement;

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  IButtonOptions;

type IButtonVariant = "outline" | "solid" | "ghost";
type IButtonColorVariant = "primary" | "warning" | "success";

const getVariant = (variant: IButtonVariant) => {
  switch (variant) {
    case "outline":
      return "btn-outline";
    case "ghost":
      return "btn-ghost";
    default:
      return "solid";
  }
};

const getColor = (colorType: IButtonColorVariant) => {
  switch (colorType) {
    case "primary":
      return "bg-indigo-600 hover:bg-indigo-500";
    case "warning":
      return "bg-red-600 hover:bg-red-500";
    case "success":
      return "bg-green-500 hover:bg-green-400";
    default:
      return "bg-white";
  }
};

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    variant = "solid",
    color,
    type = "button",
    className,
    children,
    ...rest
  } = props;

  const merged = clsx(
    "flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
    getVariant(variant),
    color && getColor(color),
    className
  );

  return (
    <button ref={ref} className={merged} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
