import ClientContainer from "../components/ClientContainer";
import Container from "../components/containers/Container";
import RegisterContainer from "../components/containers/RegisterContainer";

const RegisterPage = () => {
  return (
    <ClientContainer>
      <Container>
        <div>
          <div>
            <RegisterContainer />
          </div>
        </div>
      </Container>
    </ClientContainer>
  );
};

export default RegisterPage;
