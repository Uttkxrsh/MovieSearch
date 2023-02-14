import Footer from "@/components/Footer";
import GlobalStyles from "@/lib/GlobalStyles";
import StyledComponentsRegistry from "@/lib/registry";
import CountryContext from "@/context/CountryContext";
import useCountry from "@/hooks/useCountry";
import Tracking from "@/components/Tracking";
import { Helmet } from "react-helmet";
import { APP_DESCRIPTION, APP_TITLE } from "@/lib/constants";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <StyledComponentsRegistry>
          <Tracking />
          <GlobalStyles />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
