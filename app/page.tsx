import ClientContainer from "./components/containers/ClientContainer";
import Container from "./components/containers/Container";
import StoreItems from "./components/StoreItems";

import { Query } from "./types/types";

interface HomeProps {
  searchParams: Query;
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
