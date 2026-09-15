import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
};

export function Container({ children, className, as = "div" }: ContainerProps) {
  const Component = as;
  const classes = ["container", className].filter(Boolean).join(" ");
  return <Component className={classes}>{children}</Component>;
}
