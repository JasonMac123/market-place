"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu, AiOutlineProfile } from "react-icons/ai";
import { FaDoorOpen } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const [openStatus, setOpenStatus] = useState(false);
  const router = useRouter();

  const toggleOpen = useCallback(() => {
    setOpenStatus((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div
        className="flex items-center justify-center gap-8 rounded-2xl bg-neutral-100 border-[1px] shadow-md mr-8 w-32 py-4 hover:bg-neutral-300 transition-all"
        onClick={toggleOpen}
      >
        <AiOutlineMenu />
        <Avatar />
      </div>
      {openStatus && (
        <div className="absolute right-12 top-20 text-md rounded-md bg-neutral-100 py-8 px-4 border-[2px]">
          <div className="flex flex-col items-center justify-center space-y-2">
            <MenuItem
              label="Sign In"
              onClick={() => router.push("/login")}
              Icon={FaDoorOpen}
            />
            <hr className="border-black w-3/4" />
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
