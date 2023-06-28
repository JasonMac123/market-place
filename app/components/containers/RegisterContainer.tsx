"use client";
import FormInput from "../Input/FormInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const RegisterContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      address: "",
    },
  });
  return (
    <>
      <FormInput
        id="email"
        label="Email"
        register={register}
        errors={errors}
        required
      />
      <FormInput
        id="password"
        label="Password"
        register={register}
        errors={errors}
        required
      />
    </>
  );
};

export default RegisterContainer;
