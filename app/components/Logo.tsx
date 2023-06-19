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
      className="block coursor-pointer object-scale-down"
      height={alt ? "400" : "200"}
      width={alt ? "400" : "200"}
      src={alt ? "/images/LogoAlt.png" : "/images/Logo.png"}
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;
