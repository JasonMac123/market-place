"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu, AiOutlineProfile } from "react-icons/ai";
import { FaDoorOpen } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Avatar from "../Avatar";
import MenuItem from "./MenuBar";

const UserMenu = () => {
  const [openStatus, setOpenStatus] = useState(false);
  const router = useRouter();

  const toggleOpen = useCallback(() => {
    setOpenStatus(!openStatus);
  }, []);

  return (
    <div className="relative">
      <div
        className="flex items-center gap-8 rounded-xl bg-white border-[1px] shadow-md"
        onClick={toggleOpen}
      >
        <AiOutlineMenu />
        <Avatar />
      </div>
      {openStatus && (
        <div className="absolute right-4 top-14 text-md rounded-md">
          <div className="flex flex-col items-center justify-center">
            <MenuItem
              label="Sign In"
              onClick={() => router.push("/login")}
              Icon={FaDoorOpen}
            />
            <MenuItem
              label="Register"
              onClick={() => router.push("/register")}
              Icon={AiOutlineProfile}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
