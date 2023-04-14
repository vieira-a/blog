import { ReactElement, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className: string;
}

export default function Button({ children, className }: ButtonProps) {
  return <button className={className}>{children}</button>;
}
