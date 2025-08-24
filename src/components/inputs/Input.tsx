import React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className = "", type = "text", ...props }, ref) => {
    const baseClass =
      "h-10 w-full rounded-md border px-3 py-2 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";

    return (
      <input
        ref={ref}
        type={type}
        className={`${baseClass} ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
