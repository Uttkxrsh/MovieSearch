import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  // @ts-ignore
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          //  @ts-ignore
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <style>{`@font-face {font-family: 'Fira Mono';font-style: normal;font-weight: 400;font-display: swap;src: url('FiraMono.woff2') format('woff2');}@font-face {font-family: 'Fira Mono Fallback';font-style: normal;font-weight: 400;src: local('Arial');ascent-override: 71.11%;descent-override: 20.15%;line-gap-override: 0.00%;size-adjust: 131.49%;}`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
