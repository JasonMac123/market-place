import ClientContainer from "../components/containers/ClientContainer";
import InfoCard from "../components/cards/InfoCard";
import Container from "../components/containers/Container";
import LoginContainer from "../components/containers/LoginContainer";

const LoginPage = () => {
  return (
    <ClientContainer>
      <Container>
        <div>
          <div className="my-10 mx-auto flex h-[80vh] xl:h-[100vh] w-2/3 items-center justify-center rounded-xl overflow-hidden bg-white">
            <LoginContainer />
            <InfoCard />
          </div>
        </div>
      </Container>
    </ClientContainer>
  );
};

export default LoginPage;
