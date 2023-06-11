"use client";

import Logo from "../Logo";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

const NavBar = () => {
  return (
    <div className="fixed flex justify-between bg-blue-500">
      <Logo />
      <SearchBar />
      <UserMenu />
    </div>
  );
};

export default NavBar;
