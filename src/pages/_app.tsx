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
    <>
      <style jsx global>{`
        @font-face {
          font-family: "Fira Mono";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url("/FiraMono.woff2") format("woff2");
        }

        @font-face {
          font-family: "Fira Mono Fallback";
          font-style: normal;
          font-weight: 400;
          src: local("Arial");
          ascent-override: 71.11%;
          descent-override: 20.15%;
          line-gap-override: 0%;
          size-adjust: 131.49%;
        }
      `}</style>

      <Wrapper>
        <PageMeta />
        <Tracking />
        <GlobalStyles />
        <Component {...pageProps} />
        <Footer
          mobileFixed={
            pathname?.includes("/tv") ||
            pathname?.includes("/movie") ||
            pathname?.includes("/search")
          }
        />
      </Wrapper>
    </>
  );
};

export default RootLayout;
