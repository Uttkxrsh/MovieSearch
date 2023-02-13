"use client";

import Footer from "@/components/Footer";
import GlobalStyles from "@/lib/GlobalStyles";
import StyledComponentsRegistry from "@/lib/registry";
import CountryContext from "@/context/CountryContext";
import useCountry from "@/hooks/useCountry";
import Tracking from "@/components/Tracking";
import { Helmet } from "react-helmet";
import { APP_DESCRIPTION, APP_TITLE } from "@/lib/constants";

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
          <Tracking />
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
