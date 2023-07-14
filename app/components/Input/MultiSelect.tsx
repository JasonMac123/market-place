"use client";

import Select from "react-select";

interface MultiSelectProps {
  optionList: [];
  value?: string;
  onChange: (value: string) => void;
}

interface objectOption {
  value: string;
  label: string;
}

const convertOptions = (array: []) => {
  const newArray = [];
  for (const element of array) {
    let newOption: objectOption = { value: element, label: element };
    newArray.push(newOption);
  }
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

  const newOptionList = convertOptions(optionList);

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
