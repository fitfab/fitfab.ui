import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="bg-black text-white rounded-full px-4 py-2 max-w-xs"
      {...rest}
    >
      {children}
    </button>
  );
}

Button.displayName = "Button";
