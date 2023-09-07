"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

import { IconType } from "react-icons";
import queryString from "query-string";

interface StoreCategoryProps {
  label: string;
  Icon?: IconType;
  selected?: Boolean;
}

interface Query {
  [name: string]: string;
}

const StoreCategory: React.FC<StoreCategoryProps> = ({
  Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = queryString.parse(params.toString());
    }

    const updatedQuery: Query = {
      category: label,
    };

    const url = queryString.stringifyUrl(
      { url: "/", query: updatedQuery },
      { skipNull: true }
    );

    router.push(url);
  }, [router, label, params]);

  return (
    <div
      className={`text-alice w-[45%] lg:w-auto text-lg hover:bg-cerulean lg:bg-none bg-celestial h-3/4 flex items-center justify-center px-2 py-4 rounded-lg gap-4 cursor-pointer hover:text-neutral-200
      ${selected ? "bg-cerulean" : ""}`}
      onClick={handleClick}
    >
      {Icon && <Icon size={20} />}
      {label}
    </div>
  );
};

export default StoreCategory;
