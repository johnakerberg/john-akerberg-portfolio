import type { ElementType, ReactNode } from "react";

type VisuallyHiddenProps = {
  children: ReactNode;
  as?: ElementType;
};

export function VisuallyHidden({ children, as: Component = "span" }: VisuallyHiddenProps) {
  return <Component className="sr-only">{children}</Component>;
}
