import { ReactElement } from "react";

interface ButtonProps {
  children: ReactElement;
  className: string;
}

export default function Button({ children, className }: ButtonProps) {
  return <button className={className}>{children}</button>;
}
