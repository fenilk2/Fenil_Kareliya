import type { ElementType, ReactNode, CSSProperties } from "react";

export interface ScrollGradientTextProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "subheading";
  id?: string;
  style?: CSSProperties;
}

export default function ScrollGradientText({
  as: Component = "span",
  children,
  className = "",
  variant = "primary",
  id,
  style,
}: ScrollGradientTextProps) {
  const variantClass =
    variant === "secondary"
      ? "chromatic-secondary"
      : variant === "subheading"
      ? "chromatic-subheading"
      : "chromatic-primary";

  return (
    <Component
      id={id}
      data-chromatic={variant}
      className={`chromatic-text ${variantClass} ${className}`.trim()}
      style={style}
    >
      {children}
    </Component>
  );
}
