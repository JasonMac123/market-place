"use client";

import { useEffect, useState } from "react";

interface ClientContainerProps {
  children: React.ReactNode;
}

const ClientContainer: React.FC<ClientContainerProps> = ({ children }) => {
  const [hydrationStatus, setHydrationStatus] = useState(false);

  useEffect(() => {
    setHydrationStatus(true);
  });

  if (!hydrationStatus) {
    return null;
  }

  return <>{children}</>;
};

export default ClientContainer;
