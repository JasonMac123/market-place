"use client";

import Image from "next/image";

import { GrCheckmark } from "react-icons/gr";

const InfoCard = () => {
  return (
    <div className="relative w-1/2 h-full flex flex-col items-center justify-center gap-4">
      <Image
        alt="Japanese Shrine"
        src={"/images/InfoCard.jpg"}
        fill
        className="z-10 opacity-80"
      />
      <div className="flex flex-col justify-between items-center z-20 w-3/4 h-full my-8 rounded-xl">
        <div className="bg-white bg-opacity-80 rounded-lg px-2 py-8">
          <h2 className="text-black text-3xl">Get Started with an Account!</h2>
        </div>
        <div className="flex flex-col bg-white bg-opacity-80 rounded-lg px-2 py-8 space-y-4">
          <div className="flex items-center space-x-2">
            <GrCheckmark size={20} className="text-white" />
            <h3 className="text-2xl text-black">One click shopping stop!</h3>
          </div>
          <div className="flex items-center space-x-2">
            <GrCheckmark size={20} className="text-white" />
            <h3 className="text-2xl text-black">Exclusive membership deals!</h3>
          </div>
          <div className="flex items-center space-x-2">
            <GrCheckmark size={20} className="text-white" />
            <h3 className="text-2xl text-black">
              Giveaways to random members!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
