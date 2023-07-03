"use client";

import Logo from "../Logo";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

const NavBar = () => {
  return (
    <div className="fixed z-30 flex justify-between items-center bg-lapis w-full h-[20vh]">
      <Logo />
      <SearchBar />
      <UserMenu />
    </div>
  );
};

export default NavBar;
