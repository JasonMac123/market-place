"use client";

import Button from "../input/Button";
import FormInput from "../input/FormInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import signUp from "@/app/firebase/auth/signup";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

import { toast } from "react-toastify";

const RegisterContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const registerWithNative: SubmitHandler<FieldValues> = async (data) => {
    const { email, password } = data;
    const { result, error } = await signUp(email, password);

    if (error) {
      console.log(error);
      return toast.error(
        "Could not register, Please try again or with another emaiil."
      );
    }

    return router.push("/");
  };

  const redirectLogin = useCallback(() => {
    router.push("/login");
  }, []);

  return (
    <div className="w-[95%] xl:w-1/2 px-4 xl:px-20 h-full space-y-4 relative flex flex-col xl:items-center xl:justify-center pt-16">
      <div className="mb-8 space-y-4">
        <h1 className="w-full text-center text-lg sm:text-2xl md:text-3xl">
          Create a new account!
        </h1>
        <h2 className="text-sm sm:text-md md:text-lg text-left w-full">
          START FOR FREE
        </h2>
      </div>
      <FormInput
        id="email"
        type="email"
        label="Email"
        register={register}
        errors={errors}
        required
      />
      <FormInput
        id="password"
        type="password"
        label="Password"
        register={register}
        errors={errors}
        required
      />
      <Button
        label={"Register your Account!"}
        onClick={handleSubmit(registerWithNative)}
      />
      <div className="mt-4 flex flex-col xl:flex-row absolute bottom-3 left-4 gap-2 text-gray-600">
        <h4>Already have an Account?</h4>
        <h4
          onClick={redirectLogin}
          className="cursor-pointer hover:underline hover:text-gray-400 transition"
        >
          Log-in here!
        </h4>
      </div>
    </div>
  );
};

export default RegisterContainer;
