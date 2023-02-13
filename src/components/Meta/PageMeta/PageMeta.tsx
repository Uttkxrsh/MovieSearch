"use client";

import { FC } from "react";
import { IProps } from "./PageMeta.types";
import { Helmet } from "react-helmet";
import { APP_DESCRIPTION, APP_TITLE } from "@/lib/constants";

const PageMeta: FC<IProps> = ({ title, image }) => {
  return (
    <Helmet>
      <title>{title || APP_TITLE}</title>
      <meta property="og:title" content={title || APP_TITLE} />
      <meta property="twitter:title" content={title || APP_TITLE} />

      <meta name="description" content={APP_DESCRIPTION} />
      <meta property="twitter:description" content={APP_DESCRIPTION} />

      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary_large_image" />

      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:alt" content={title || APP_TITLE} />}
      {image && <meta property="twitter:image" content={image} />}
      {image && (
        <meta property="twitter:image:alt" content={title || APP_TITLE} />
      )}
    </Helmet>
  );
};

export default PageMeta;
