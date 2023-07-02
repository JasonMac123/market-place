import ClientContainer from "../components/ClientContainer";
import InfoCard from "../components/InfoCard";
import Container from "../components/containers/Container";
import LoginContainer from "../components/containers/LoginContainer";

const LoginPage = () => {
  return (
    <ClientContainer>
      <Container>
        <div>
          <div className="my-10 mx-20 flex h-[100vh] items-center rounded-xl overflow-hidden bg-white">
            <LoginContainer />
            <InfoCard />
          </div>
        </div>
      </Container>
    </ClientContainer>
  );
};

export default LoginPage;
