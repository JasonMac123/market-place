import { BiErrorCircle } from "react-icons/bi";

const Page = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="fle items-center justify-center border-[1px] p-8">
        <BiErrorCircle />
        <h3 className="text-3xl">
          Could not process your order, please try again!
        </h3>
      </div>
    </div>
  );
};

export default Page;
