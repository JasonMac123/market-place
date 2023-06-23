"use client";

import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type,
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
        className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed 
        ${errors[id] ? "border-rose-600" : "border-slate-300"} 
        ${errors[id] ? "focus:border-rose-600" : "focus:border-black"}`}
      />
      <label
        className={`absolute text-sm duration-150 transform -translate-y-3 top-5 z-10 origin-[0] 
        ${errors[id] ? "text-rose-600" : ""}
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
