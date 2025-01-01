import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import Layout from "@/components/layout";
import { ThemeProvider } from "@mui/material";
import theme from "@/components/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export const metadata: Metadata = {
  title: "The Earthern Vogue",
  description: "The Earthern Vogue",
};

const raleway = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${raleway.className}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Layout>{children}</Layout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
