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

  return (
    <div className="w-1/2 px-20 space-y-4">
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
      <Button
        label={"Login with Google!"}
        Icon={FcGoogle}
        onClick={signInWithGoogle}
      />
    </div>
  );
};

export default LoginContainer;
