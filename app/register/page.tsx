import ClientContainer from "../components/ClientContainer";
import Container from "../components/Container";
import FormInput from "../components/Input/FormInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const RegisterPage = () => {
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

  return (
    <ClientContainer>
      <Container>
        <div>
          <div>
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
          </div>
        </div>
      </Container>
    </ClientContainer>
  );
};

export default RegisterPage;
