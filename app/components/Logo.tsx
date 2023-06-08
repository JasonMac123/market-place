"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="logo"
      className="block coursor-pointer object-scale-down"
      height="100"
      width="100"
      src="/images/Logo.png"
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;
