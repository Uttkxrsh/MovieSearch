import { APP_DESCRIPTION, APP_TITLE } from "@/lib/constants";
import Head from "next/head";
import { FC } from "react";
import { IProps } from "./PageMeta.types";

// TODO: Add default image
const PageMeta: FC<IProps> = ({ title, image }) => {
  return (
    <Head>
      <title>{title || APP_TITLE}</title>
      <meta name="twitter:title" content={title || APP_TITLE} />
      <meta property="og:title" content={title || APP_TITLE} />

      <meta property="og:site_name" content={APP_TITLE} />

      <meta property="og:description" content={APP_DESCRIPTION} />
      <meta name="twitter:description" content={APP_DESCRIPTION} />

      <meta name="twitter:card" content="summary_large_image" />

      {image && (
        <>
          <meta property="og:image" content={image} />
          <meta property="og:image:alt" content={title || APP_TITLE} />
          <meta name="twitter:image" content={image} />
          <meta name="twitter:image:alt" content={title || APP_TITLE} />
        </>
      )}
    </Head>
  );
};

export default PageMeta;
