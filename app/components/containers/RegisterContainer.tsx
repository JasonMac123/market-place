"use client";
import signUp from "@/app/firebase/auth/signup";
import Button from "../Button";
import FormInput from "../Input/FormInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
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

  return (
    <div className="w-1/2 px-40 space-y-4">
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
    </div>
  );
};

export default RegisterContainer;
