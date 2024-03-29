"use client";

import Logo from "../Logo";
import StoreLocation from "./StoreLocation";
import MediaLink from "./MediaLink";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillPhone,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full h-88 bg-lapis flex flex-col pt-12 justify-around text-alice mt-8">
      <div className="flex justify-around pb-8">
        <div className="flex lg:flex-row flex-col">
          <Logo alt />
          <div className="flex md:flex-row space-y-16 md:space-y-0 flex-col justify-between items-center md:items-start mx-8 mt-4">
            <div className="flex flex-col gap-6 mr-4 justify-start lg:w-1/3 w-[80%]">
              <h3 className="text-4xl">Visit us at our physical stores</h3>
              <StoreLocation
                streetName="Steeles Avenue West"
                streetNumber={4001}
                city="Toronto"
                region="Ontario"
                postalCode="L4K 2Y2"
              />
              <StoreLocation
                streetName="St George Street"
                streetNumber={1659}
                city="Vancouver"
                region="British Columbia"
                postalCode="V5T 1Z7"
              />
              <h3 className="text-white text-xl">More coming soon!</h3>
            </div>
            <div className="mr-4 lg:w-1/3 w-[80%]">
              <div className="text-4xl mb-16">Contact us!</div>
              <div className="space-y-2">
                <div className="flex gap-2 items-center hover:text-blue-700 hover:cursor-pointer">
                  <AiFillPhone size={20} />
                  <h3> (416) - 111 - 1111</h3>
                </div>
                <div className="flex gap-2 items-center hover:text-blue-700 hover:cursor-pointer">
                  <MdEmail size={20} />
                  <h3> Jason@LookOfJapan.com</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/3 w-[80%]">
              <div className="text-4xl mb-4">Follow our social media!</div>
              <div className="space-y-3">
                <MediaLink Icon={AiFillFacebook} label="FaceBook" />
                <MediaLink Icon={AiFillInstagram} label="Instagram" />
                <MediaLink Icon={AiOutlineTwitter} label="Twitter" />
                <MediaLink Icon={AiFillLinkedin} label="Linked In" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end w-full pr-4">
        <div className="mr-4 text-gray-600 hover:underline hover:cursor-pointer">
          Terms
        </div>
        <div className="mr-4 text-gray-600 hover:underline hover:cursor-pointer">
          Privacy
        </div>
        @ 2023 - Jason Mac All rights reserved
      </div>
    </div>
  );
};

export default Footer;
