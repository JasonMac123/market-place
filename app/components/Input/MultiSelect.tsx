"use client";

import Select from "react-select";

interface MultiSelectProps {
  optionList: [Object, ...Object[]];
  value?: string;
  onChange: (value: string) => void;
}

const convertOptions = (array: any[]) => {
  const newArray = array.map((element) => {
    return { label: element, value: element };
  });
  return newArray;
};

const MultiSelect: React.FC<MultiSelectProps> = ({
  value,
  onChange,
  optionList,
}) => {
  const customStyles = {
    control: (baseStyles: any) => ({
      ...baseStyles,
      height: "60px",
    }),
  };

  const newOptionList: any[] = convertOptions(optionList);

  return (
    <div>
      <Select
        placeholder="Select"
        isClearable
        options={newOptionList}
        value={value}
        onChange={(value) => onChange(value as string)}
        styles={customStyles}
      />
    </div>
  );
};

export default MultiSelect;
