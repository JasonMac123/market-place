"use client";

import Logo from "../Logo";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

const NavBar = () => {
  return (
    <div className="fixed flex justify-between items-center bg-blue-500 w-full h-[20vh]">
      <Logo />
      <SearchBar />
      <UserMenu />
    </div>
  );
};

export default NavBar;
