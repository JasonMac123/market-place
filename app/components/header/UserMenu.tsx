"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import {
  AiOutlineMenu,
  AiOutlineProfile,
  AiOutlineShoppingCart,
  AiOutlineHistory,
  AiOutlineLogout,
} from "react-icons/ai";
import { FaDoorOpen } from "react-icons/fa";

import { getAuth } from "@firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase_app from "@/app/firebase/config";

import { toast } from "react-toastify";

import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const router = useRouter();
  const auth = getAuth(firebase_app);

  const [user] = useAuthState(auth);
  const [openStatus, setOpenStatus] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpenStatus((value) => !value);
  }, []);

  const logOut = useCallback(() => {
    auth.signOut();
  }, [auth]);

  return (
    <div className="relative">
      <div
        className="flex items-center justify-center gap-8 rounded-2xl bg-neutral-100 border-[1px] shadow-md mr-8 w-32 py-4 hover:bg-neutral-300 transition-all cursor-pointer"
        onClick={toggleOpen}
      >
        <AiOutlineMenu />
        <Avatar />
      </div>
      {openStatus && (
        <div className="absolute right-12 top-20 text-md rounded-md bg-neutral-100 py-8 px-4 border-[2px]">
          <div
            className="flex flex-col items-center justify-center space-y-2 w-40
            "
          >
            {!user ? (
              <>
                <MenuItem
                  label="Sign In"
                  onClick={() => {
                    toggleOpen();
                    router.push("/login");
                  }}
                  Icon={FaDoorOpen}
                />
                <hr className="border-black w-3/4" />
                <MenuItem
                  label="Register"
                  onClick={() => {
                    toggleOpen();
                    router.push("/register");
                  }}
                  Icon={AiOutlineProfile}
                />
              </>
            ) : (
              <>
                <MenuItem
                  label="My Cart"
                  onClick={() => {
                    toggleOpen();
                    router.push("/cart");
                  }}
                  Icon={AiOutlineShoppingCart}
                />
                <hr className="border-black w-3/4" />
                <MenuItem
                  label="My past orders"
                  onClick={() => {
                    toggleOpen();
                    router.push("/orders");
                  }}
                  Icon={AiOutlineHistory}
                />
                <hr className="border-black w-3/4" />
                <MenuItem
                  label="Logout"
                  onClick={() => {
                    toggleOpen();
                    toast.success("Succesfully Logged Out!");
                    logOut();
                  }}
                  Icon={AiOutlineLogout}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
