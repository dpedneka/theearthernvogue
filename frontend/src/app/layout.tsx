import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import Layout from "@/components/layout";
import { ThemeProvider } from "@mui/material";
import theme from "@/components/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import QCProvider from "@/components/providers/tanstack/QCProvider";

export const metadata: Metadata = {
  title: "The Earthern Vogue",
  description: "The Earthern Vogue",
};

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${nunito.className}`}>
        <AppRouterCacheProvider>
          <QCProvider>
            <ThemeProvider theme={theme}>
              <Layout>{children}</Layout>
            </ThemeProvider>
          </QCProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
