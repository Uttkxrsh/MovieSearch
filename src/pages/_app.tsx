import Footer from "@/components/Footer";
import PageMeta from "@/components/Meta/PageMeta";
import Tracking from "@/components/Tracking";
import GlobalStyles from "@/lib/GlobalStyles";
import StyledComponentsRegistry from "@/lib/registry";

const RootLayout = ({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) => {
  return (
    <StyledComponentsRegistry>
      <>
        <PageMeta />
        <Tracking />
        <GlobalStyles />
        <Component {...pageProps} />
        <Footer />
      </>
    </StyledComponentsRegistry>
  );
};

export default RootLayout;
