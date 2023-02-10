import Head from "next/head";
import Script from "next/script";
import { FC } from "react";

const Tracking: FC = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") {
    return null;
  }

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG_ID}`}
      ></Script>
      <Script id="gtag">{`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${process.env.NEXT_PUBLIC_GTAG_ID}');`}</Script>
    </>
  );
};

export default Tracking;
