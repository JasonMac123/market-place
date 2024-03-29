"use client";

import Logo from "../Logo";
import UserMenu from "./UserMenu";

const NavBar = () => {
  return (
    <div className="fixed z-30 flex justify-between items-center bg-lapis w-full h-[20vh]">
      <Logo />
      <h1 className="text-7xl hidden md:block text-alice text-center font-playfair">
        Look of Japan
      </h1>
      <UserMenu />
    </div>
  );
};

export default NavBar;
