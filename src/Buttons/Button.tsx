import React from "react";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "outline" | "dark";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  text,
  variant = "primary",
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[#D47D46] text-white hover:opacity-90",

    secondary:
      "bg-[#F0A678] text-white hover:opacity-90",

    dark:
      "bg-black text-white hover:bg-neutral-800",

    outline:
      "bg-[#E5E5E5] border border-gray-500 text-black hover:bg-gray-200",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-8
        py-4
        font-semibold
        uppercase
        transition-all
        duration-300
        min-w-42.5
        ${variants[variant]}
        ${className}
      `}
    >
      {text}
    </button>
  );
}