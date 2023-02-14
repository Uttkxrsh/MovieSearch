import Footer from "@/components/Footer";
import PageMeta from "@/components/Meta/PageMeta";
import Tracking from "@/components/Tracking";
import GlobalStyles from "@/lib/GlobalStyles";
import StyledComponentsRegistry from "@/lib/registry";
import styled from "styled-components";

const RootLayout = ({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) => {
  return (
    <>
      <PageMeta />
      <Tracking />
      <GlobalStyles />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default RootLayout;
