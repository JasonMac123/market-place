import ClientContainer from "../components/ClientContainer";
import InfoCard from "../components/FormCard";
import Container from "../components/containers/Container";
import RegisterContainer from "../components/containers/RegisterContainer";

const RegisterPage = () => {
  return (
    <ClientContainer>
      <Container>
        <div>
          <div className="pt-40 pb-20 flex">
            <RegisterContainer />
            <InfoCard />
          </div>
        </div>
      </Container>
    </ClientContainer>
  );
};

export default RegisterPage;
