import React from "react";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = "", ...props }, ref) => {
    const baseClass =
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";

    return (
      <label
        ref={ref}
        className={`${baseClass} ${className}`}
        {...props}
      />
    );
  }
);

Label.displayName = "Label";
