import { HTMLAttributes, ReactNode } from "react";
import Direction from "../types/Direction";

export interface IProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  direction: Direction;
  disabled: boolean;
}

export default function ItemShelfButton({ children, direction, disabled = false, ...htmlAttributes }: IProps) {
  return (
    <button
      {...htmlAttributes}
      aria-label={`scroll full section ${direction.toLowerCase()}`}
      disabled={disabled}
      className={`absolute z-10 rounded-lg bg-gray-950 bg-opacity-20 p-4 transition-opacity duration-500 hover:duration-150 dark:bg-opacity-50 ${
        disabled
          ? "opacity-0 hover:opacity-20 focus-visible:opacity-20"
          : "opacity-50 hover:opacity-100 focus-visible:opacity-100"
      }`}
      style={direction === Direction.Left ? { left: "0.5rem" } : { right: "0.5rem" }}
    >
      {children}
    </button>
  );
}
