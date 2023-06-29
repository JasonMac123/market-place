import ClientContainer from "../components/ClientContainer";
import InfoCard from "../components/FormCard";
import Container from "../components/containers/Container";
import LoginContainer from "../components/containers/LoginContainer";

const LoginPage = () => {
  return (
    <ClientContainer>
      <Container>
        <div>
          <div className="pt-40 pb-20 flex">
            <LoginContainer />
            <InfoCard />
          </div>
        </div>
      </Container>
    </ClientContainer>
  );
};

export default LoginPage;
