"use client";

import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        {...register(id, { required })}
        placeholder=" "
        type={type}
      />
    </div>
  );
};

export default FormInput;
