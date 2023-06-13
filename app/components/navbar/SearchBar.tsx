"use client";
import { RxMagnifyingGlass } from "react-icons/rx";

const SearchBar = () => {
  return (
    <div className="rounded-full bg-white border-[1px] shadow-md flex justify-between items-center py-8 px-8 h-1/4 w-96">
      <div className="text-2xl">Search!</div>
      <RxMagnifyingGlass size={30} />
    </div>
  );
};

export default SearchBar;
