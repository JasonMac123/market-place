"use client";

import Button from "../input/Button";
import FormInput from "../input/FormInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import firebase_app from "@/app/firebase/config";
import signIn from "@/app/firebase/auth/signin";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const LoginContainer = () => {
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

  const provider = new GoogleAuthProvider();
  const auth = getAuth(firebase_app);

  const router = useRouter();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      toast.success("Logged in succesfully!");
      return router.push("/");
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const signInWithNative: SubmitHandler<FieldValues> = async (data) => {
    const { email, password } = data;
    const { result, error } = await signIn(email, password);

    if (error) {
      console.log(error);
      return toast.error("Could not Log in. Please try again.");
    }

    return router.push("/");
  };

  const redirectRegister = useCallback(() => {
    router.push("/register");
  }, []);

  return (
    <div className="w-[95%] xl:w-1/2 px-4 xl:px-20 h-full space-y-4 relative flex flex-col xl:items-center xl:justify-center pt-16">
      <h2 className="w-full text-center text-lg sm:text-2xl md:text-3xl lg:mb-8 xl:mb-12">
        Welcome Back!
      </h2>
      <h3 className="text-sm sm:text-md md:text-lg text-left w-full">
        Please enter your details and get ready to shop!
      </h3>
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
        label={"Login using your account!"}
        onClick={handleSubmit(signInWithNative)}
      />
      <div className="w-full flex items-center justify-center gap-4">
        <div className="border-[1px] w-1/3 h-[1px] border-neutral-500"></div>
        <h4>or</h4>
        <div className="border-[1px] w-1/3 h-[1px] border-neutral-500"></div>
      </div>

      <Button
        label={"Login with Google!"}
        Icon={FcGoogle}
        onClick={signInWithGoogle}
      />
      <div className="flex flex-col xl:flex-row absolute bottom-3 left-[5.5rem] gap-2 text-gray-600">
        <h4>Don't have an account?</h4>
        <h4
          onClick={redirectRegister}
          className="cursor-pointer hover:underline hover:text-gray-400 transition"
        >
          Register with us!
        </h4>
      </div>
    </div>
  );
};

export default LoginContainer;
