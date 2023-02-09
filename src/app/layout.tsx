"use client";

import Footer from "@/components/Footer";
import GlobalStyles from "@/lib/GlobalStyles";
import StyledComponentsRegistry from "@/lib/registry";
import CountryContext from "@/context/CountryContext";
import { useEffect, useState } from "react";
import useCountry from "@/hooks/useCountry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const country = useCountry();

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
          <CountryContext.Provider value={country}>
            {children}
          </CountryContext.Provider>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
