"use client";

import Select from "react-select";

interface MultiSelectProps {
  optionList: [];
  value?: string;
  onChange: (value: string) => void;
}

const DropDownSelect: React.FC<MultiSelectProps> = ({
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

  return (
    <div>
      <Select
        placeholder="Select Toronto region below"
        isClearable
        options={optionList}
        value={value}
        onChange={(value) => onChange(value as string)}
        styles={customStyles}
      />
    </div>
  );
};

export default DropDownSelect;
