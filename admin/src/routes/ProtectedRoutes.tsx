"use client";
// components/ProtectedRoute.tsx
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { CircularProgress, Container } from "@mui/material";
import { useAuth } from "@/providers/context/AuthContext";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    console.log(isAuthenticated);
    if (!isAuthenticated && !isLoading) {
      router.push("/authentication/login"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading)
    return (
      <Container sx={{ p: 20, display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Container>
    );

  // Render children only if authenticated
  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
