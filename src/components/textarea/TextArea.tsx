import React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", ...props }, ref) => {
    const baseClass =
      "w-full min-h-[80px] rounded-md border px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed";
    return (
      <textarea
        ref={ref}
        className={`${baseClass} ${className}`}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
