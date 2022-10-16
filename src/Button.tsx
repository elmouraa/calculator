import clsx from "clsx";
import { MouseEventHandler, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  color?: "primary" | "secondary";
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      className={clsx(
        "text-white py-4 text-xl rounded flex items-center justify-center",
        {
          "bg-blue-500 hover:bg-blue-400": color === "primary",
          "bg-gray-700 hover:bg-gray-600": color === "secondary",
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
