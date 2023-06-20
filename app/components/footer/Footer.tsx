"use client";

import Logo from "../Logo";
import StoreLocation from "./StoreLocation";
import MediaLink from "./MediaLink";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full h-88 bg-blue-400 flex flex-col py-12 justify-around">
      <h2 className="text-5xl text-center">Look of Japan!</h2>
      <div className="flex justify-around">
        <div className="flex">
          <Logo alt />
          <div className="flex flex-col gap-4 justify-start">
            <h3 className="text-lg">Visit us at our physical stores</h3>
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
            <h3 className="">More coming soon!</h3>
          </div>
        </div>
        <div>
          <div>Contact us!</div>
          <div>
            <h3>Phone Number</h3>
            <h3>(416)-111-1111</h3>
          </div>
          <div>
            <div>Email</div>
            <h3>Jason@LookOfJapan.com</h3>
          </div>
          <div>Phone Number!</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-lg">Follow us on our social media!</div>
          <div>
            <MediaLink Icon={AiFillFacebook} label="FaceBook" />
            <MediaLink Icon={AiFillInstagram} label="Instagram" />
            <MediaLink Icon={AiOutlineTwitter} label="Twitter" />
            <MediaLink Icon={AiFillLinkedin} label="Linked In" />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="mr-4 text-gray-600">Terms</div>
        <div className="mr-4 text-gray-600">Privacy</div>@ 2023 - Jason Mac All
        rights reserved
      </div>
    </div>
  );
};

export default Footer;
