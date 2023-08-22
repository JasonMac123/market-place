import { BiErrorCircle } from "react-icons/bi";

const Page = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white rounded-lg p-16">
      <div className="fle items-center justify-center border-[1px] p-8">
        <BiErrorCircle />
        <h3 className="text-3xl">Please log in to see your cart information</h3>
      </div>
    </div>
  );
};

export default Page;
