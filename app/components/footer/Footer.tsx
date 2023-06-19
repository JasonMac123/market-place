"use client";

import Logo from "../Logo";
import MediaLink from "./MediaLink";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full h-40 bg-blue-400 flex flex-col py-4 justify-space-around items-center">
      <div>Follow us on our social media!</div>
      <div className="flex">
        <MediaLink Icon={AiFillFacebook} label="FaceBook" />
        <MediaLink Icon={AiFillInstagram} label="Instagram" />
        <MediaLink Icon={AiOutlineTwitter} label="Twitter" />
        <MediaLink Icon={AiFillLinkedin} label="Linked In" />
      </div>
      <div>@ 2023 - Jason Mac</div>
    </div>
  );
};

export default Footer;
