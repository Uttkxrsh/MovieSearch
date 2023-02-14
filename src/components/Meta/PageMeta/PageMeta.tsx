import { FC } from "react";
import { IProps } from "./PageMeta.types";
import { APP_DESCRIPTION, APP_TITLE } from "@/lib/constants";
import Head from "next/head";

const PageMeta: FC<IProps> = ({ title, image }) => {
  return (
    <Head key="meta">
      <title key="title">{title || APP_TITLE}</title>
      <meta property="og:title" content={title || APP_TITLE} key="og:title" />
      <meta
        property="twitter:title"
        content={title || APP_TITLE}
        key="twitter:title"
      />

      <meta name="description" content={APP_DESCRIPTION} key="description" />
      <meta
        property="twitter:description"
        content={APP_DESCRIPTION}
        key="twitter:description"
      />

      <meta property="og:type" content="website" key="og:type" />
      <meta
        property="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />

      {image && <meta property="og:image" content={image} key="og:image" />}
      {image && (
        <meta
          property="og:image:alt"
          content={title || APP_TITLE}
          key="og:image:alt"
        />
      )}
      {image && (
        <meta property="twitter:image" content={image} key="twitter:image" />
      )}
      {image && (
        <meta
          property="twitter:image:alt"
          content={title || APP_TITLE}
          key="twitter:image:alt"
        />
      )}
    </Head>
  );
};

export default PageMeta;
