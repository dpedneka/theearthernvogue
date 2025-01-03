"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import QCProvider from "@/providers/tanstack/QCProvider";
import { AuthProvider } from "@/providers/context/AuthContext";
import ProtectedRoute from "@/routes/ProtectedRoutes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={baselightTheme}>
          <QCProvider>
            <AuthProvider>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {children}
            </AuthProvider>
          </QCProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
