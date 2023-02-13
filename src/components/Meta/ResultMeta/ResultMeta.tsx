import { APP_TITLE } from "@/lib/constants";
import Head from "next/head";
import { FC } from "react";
import { IProps } from "./ResultMeta.types";

const ResultMeta: FC<IProps> = ({ image, title, type }) => {
  return (
    <Head>
      <title>
        {title} - {APP_TITLE}
      </title>
      <meta name="twitter:title" content={`${title} - ${APP_TITLE}`} />
      <meta property="og:title" content={`${title} - ${APP_TITLE}`} />

      <meta property="og:site_name" content={APP_TITLE} />

      <meta
        property="og:description"
        content={`Find out where to watch ${title}.`}
      />
      <meta
        name="twitter:description"
        content={`Find out where to watch ${title}.`}
      />

      <meta
        property="og:type"
        content={`video.${type === "movie" ? "movie" : "tv_show"}`}
      />
      <meta name="twitter:card" content="summary_large_image" />

      {image && (
        <>
          <meta property="og:image" content={image} />
          <meta property="og:image:alt" content={`Poster for ${title}`} />
          <meta name="twitter:image" content={image} />
          <meta name="twitter:image:alt" content={`Poster for ${title}`} />
        </>
      )}
    </Head>
  );
};

export default ResultMeta;
