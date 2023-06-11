"use client";

import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const UserMenu = () => {
  const [openStatus, setOpenStatus] = useState(false);

  return (
    <div className="rounded-xl bg-white border-[1px] shadow-md">
      <AiOutlineMenu />
    </div>
  );
};

export default UserMenu;
