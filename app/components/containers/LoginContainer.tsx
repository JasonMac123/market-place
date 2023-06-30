"use client";

import Button from "../Button";
import FormInput from "../Input/FormInput";
import firebase_app from "@/app/firebase/config";
import { Field, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import signIn from "@/app/firebase/auth/signin";
import { useCallback } from "react";

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
  const [user, loading] = useAuthState(auth);

  const router = useRouter();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
  };

  const signInWithNative: SubmitHandler<FieldValues> = async (data) => {
    const { email, password } = data;
    const { result, error } = await signIn(email, password);

    if (error) {
      console.log(error);
    }

    return router.push("/");
  };

  const redirectRegister = useCallback(() => {
    router.push("/register");
  }, []);

  return (
    <div className="w-1/2 h-full px-20 space-y-6 relative flex flex-col items-center justify-center">
      <h2 className="text-6xl mb-12">Welcome Back!</h2>
      <h3 className="text-md">
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
      <div className="flex absolute bottom-3 left-[5.5rem] gap-2 text-gray-600">
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
