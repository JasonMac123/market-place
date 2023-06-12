"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";

const UserMenu = () => {
  const [openStatus, setOpenStatus] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpenStatus(!openStatus);
  }, []);

  return (
    <div>
      <div
        className="flex items-center gap-8 rounded-xl bg-white border-[1px] shadow-md"
        onClick={toggleOpen}
      >
        <AiOutlineMenu />
        <Avatar />
      </div>
    </div>
  );
};

export default UserMenu;
