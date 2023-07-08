import ClientContainer from "./components/containers/ClientContainer";
import Container from "./components/containers/Container";
import StoreItems from "./components/StoreItems";

export default function Home() {
  return (
    <Container>
      <ClientContainer>
        <StoreItems />
      </ClientContainer>
    </Container>
  );
}
