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
      className={`text-alice text-lg hover:bg-cerulean h-3/4 flex items-center px-2 rounded-lg w-1/4 gap-4 hover:cursor:pointer hover:text-neutral-200
      ${selected ? "bg-cerulean" : ""}`}
      onClick={handleClick}
    >
      {Icon && <Icon size={20} />}
      {label}
    </div>
  );
};

export default StoreCategory;
