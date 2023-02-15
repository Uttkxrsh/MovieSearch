import Footer from "@/components/Footer";
import PageMeta from "@/components/Meta/PageMeta";
import Tracking from "@/components/Tracking";
import GlobalStyles from "@/style/GlobalStyles";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 100px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 0;
  }
`;

const RootLayout = ({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) => {
  const pathname = usePathname();

  return (
    <Wrapper>
      <PageMeta />
      <Tracking />
      <GlobalStyles />
      <Component {...pageProps} />
      <Footer
        mobileFixed={pathname?.includes("/tv") || pathname?.includes("/movie")}
      />
    </Wrapper>
  );
};

export default RootLayout;
