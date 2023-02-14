import { FC } from "react";
import { IProps } from "./PageMeta.types";
import { APP_DESCRIPTION, APP_TITLE } from "@/lib/constants";
import Head from "next/head";

const PageMeta: FC<IProps> = ({ title, image }) => {
  return (
    <Head key="meta">
      <title key="title">{title || APP_TITLE}</title>
      <meta name="og:title" content={title || APP_TITLE} key="og:title" />
      <meta
        name="twitter:title"
        content={title || APP_TITLE}
        key="twitter:title"
      />

      <meta name="description" content={APP_DESCRIPTION} key="description" />
      <meta
        name="twitter:description"
        content={APP_DESCRIPTION}
        key="twitter:description"
      />

      <meta name="og:type" content="website" key="og:type" />
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />

      {image && <meta name="og:image" content={image} key="og:image" />}
      {image && (
        <meta
          name="og:image:alt"
          content={title || APP_TITLE}
          key="og:image:alt"
        />
      )}
      {image && (
        <meta name="twitter:image" content={image} key="twitter:image" />
      )}
      {image && (
        <meta
          name="twitter:image:alt"
          content={title || APP_TITLE}
          key="twitter:image:alt"
        />
      )}
    </Head>
  );
};

export default PageMeta;
