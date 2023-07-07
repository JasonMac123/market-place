"use client";

import { IconType } from "react-icons";

interface StoreCategoryProps {
  label: string;
  Icon: IconType;
  selected?: Boolean;
}

const StoreCategory: React.FC<StoreCategoryProps> = ({
  Icon,
  label,
  selected,
}) => {};

export default StoreCategory;
