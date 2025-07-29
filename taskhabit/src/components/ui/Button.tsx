import type { ReactNode } from "react";

type buttonProps = {
  onClick?: () => void;
  content?: string;
  icon?: ReactNode;
  className: string;
};

const Button = ({ onClick, content, icon, className }: buttonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex gap-2 justify-center items-center ${className}`}
    >
      <span className={`${className}`}>{content}</span>
      <span className={`${className}`}>{icon}</span>
    </button>
  );
};

export default Button;
