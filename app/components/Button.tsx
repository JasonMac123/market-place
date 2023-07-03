"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  Icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, Icon }) => {
  return (
    <button
      onClick={onClick}
      className="relative rounded-lg hover:opacity-80 transition w-full py-4 font-semibold border-2 cursor-pointer bg-green-400 border-green-400 text-black"
    >
      {Icon && <Icon size={24} className="absolute left-3 top-3" />}
      {label}
    </button>
  );
};

export default Button;
