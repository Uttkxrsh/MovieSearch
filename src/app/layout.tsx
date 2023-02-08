"use client";

import Footer from "@/components/Footer";
import GlobalStyles from "@/lib/GlobalStyles";
import StyledComponentsRegistry from "@/lib/registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
