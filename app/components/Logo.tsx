"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="logo"
      className="block coursor-pointer object-scale-down"
      height="200"
      width="200"
      src="/images/Logo.png"
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;
