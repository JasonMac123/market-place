"use client";

import Link from "next/link";
import { IconType } from "react-icons";

interface MediaLinkProps {
  Icon: IconType;
  label: string;
  href?: string;
}

const MediaLink: React.FC<MediaLinkProps> = ({ Icon, label, href }) => {
  return (
    <div className="flex space-x-4 hover:text-black hover:underline">
      <div>
        <Link
          className="flex items-center space-x-2"
          href={href || "https://github.com/JasonMac123"}
        >
          <Icon size={30} />
          <h3>{label}</h3>
        </Link>
      </div>
    </div>
  );
};

export default MediaLink;
