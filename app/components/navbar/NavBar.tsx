"use client";

import Logo from "../Logo";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import firebase_app from "@/app/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

const NavBar = () => {
  const auth = getAuth(firebase_app);
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="fixed z-20 flex justify-between items-center bg-blue-500 w-full h-[20vh]">
      <Logo />
      <SearchBar />
      <UserMenu />
    </div>
  );
};

export default NavBar;
