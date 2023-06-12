"use client";

import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";

const UserMenu = () => {
  const [openStatus, setOpenStatus] = useState(false);

  return (
    <div className="flex items-center gap-8 rounded-xl bg-white border-[1px] shadow-md">
      <AiOutlineMenu />
      <Avatar />
    </div>
  );
};

export default UserMenu;
