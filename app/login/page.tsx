import ClientContainer from "../components/ClientContainer";
import Container from "../components/containers/Container";
import LoginContainer from "../components/containers/LoginContainer";

const LoginPage = () => {
  return (
    <ClientContainer>
      <Container>
        <div>
          <div>
            <LoginContainer />
          </div>
        </div>
      </Container>
    </ClientContainer>
  );
};

export default LoginPage;
