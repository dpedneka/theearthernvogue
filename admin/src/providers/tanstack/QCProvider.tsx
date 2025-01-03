"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

type qcInterface = {
  children: React.ReactNode;
};

const QCProvider = ({ children }: qcInterface) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QCProvider;
