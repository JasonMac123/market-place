"use client";

import Logo from "../Logo";
import UserMenu from "./UserMenu";

const NavBar = () => {
  return (
    <div className="fixed z-30 flex justify-between items-center bg-lapis w-full h-[20vh]">
      <Logo />
      <UserMenu />
    </div>
  );
};

export default NavBar;
