"use client";

import { useRouter } from "next/navigation";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  Icon?: IconType;
  disabled?: boolean;
  refresh?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  Icon,
  disabled,
  refresh,
}) => {
  let mouseEvent;
  const router = useRouter();

  const refreshPage = () => {
    router.refresh();
  };

  if (refresh) {
    mouseEvent = refreshPage;
  } else {
    mouseEvent = onClick;
  }

  return (
    <button
      onClick={mouseEvent}
      className={`relative rounded-lg hover:opacity-80 transition w-full py-4 font-semibold border-2 cursor-pointer  text-black
      ${
        disabled ? "bg-red-400 border-red-400" : "bg-green-400 border-green-400"
      }`}
    >
      {Icon && <Icon size={24} className="absolute left-3 top-4" />}
      {label}
    </button>
  );
};

export default Button;
