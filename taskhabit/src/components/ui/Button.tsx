import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type buttonProps = {
  content?: string;
  icon?: ReactNode;
  children?: ReactNode;
  isLoading?: boolean;
  className: string;
};

const Button = ({ content, icon, children, className, isLoading }: buttonProps & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> ) => {
  return (
    <button className={className} disabled={isLoading}>
      {isLoading ? "Loading..." : content}
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
