import Footer from "@/components/Footer";
import PageMeta from "@/components/Meta/PageMeta";
import Tracking from "@/components/Tracking";
import GlobalStyles from "@/lib/GlobalStyles";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 100px;
`;

const RootLayout = ({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) => {
  return (
    <Wrapper>
      <PageMeta />
      <Tracking />
      <GlobalStyles />
      <Component {...pageProps} />
      <Footer />
    </Wrapper>
  );
};

export default RootLayout;
