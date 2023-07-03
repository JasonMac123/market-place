"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface LogoProps {
  alt?: boolean;
}

const Logo: React.FC<LogoProps> = ({ alt }) => {
  const router = useRouter();

  return (
    <Image
      alt="logo"
      className="block coursor-pointer w-auto h-auto object-scale-down"
      height="0"
      width="0"
      sizes={alt ? "400px" : "200px"}
      src={alt ? "/images/LogoAlt.png" : "/images/Logo.png"}
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;
