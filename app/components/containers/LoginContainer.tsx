"use client";

import Button from "../Button";
import FormInput from "../Input/FormInput";
import firebase_app from "@/app/firebase/config";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

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
  if (user) {
    router.push("/");
  }

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
  };

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
      <Button label={"Login with Google!"} Icon={FcGoogle} onClick={signIn} />
    </>
  );
};

export default LoginContainer;
