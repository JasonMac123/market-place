import ClientContainer from "./components/containers/ClientContainer";
import Container from "./components/containers/Container";
import StoreItems from "./components/StoreItems";

interface HomeProps {
  searchParams: Query;
}

interface Query {
  category: string;
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <Container>
      <ClientContainer>
        <StoreItems searchParams={searchParams} />
      </ClientContainer>
    </Container>
  );
}
