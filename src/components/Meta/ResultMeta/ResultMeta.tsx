import { APP_TITLE, APP_URL } from "@/lib/constants";
import Head from "next/head";
import { FC } from "react";
import { IProps } from "./ResultMeta.types";

// TODO: Default image
const ResultMeta: FC<IProps> = ({ title, image, type, id }) => {
  return (
    <Head key="meta">
      <title key="page_title">{`${title} - ${APP_TITLE}`}</title>
      <meta
        name="og:title"
        content={`${title} - ${APP_TITLE}`}
        key="og:title"
      />
      <meta
        name="twitter:title"
        content={`${title} - ${APP_TITLE}`}
        key="twitter:title"
      />

      <meta
        name="description"
        content={`Find where to watch ${title}`}
        key="description"
      />
      <meta
        name="twitter:description"
        content={`Find where to watch ${title}`}
        key="twitter:description"
      />

      <meta
        name="og:type"
        content={`video.${type === "movie" ? "movie" : "tv_show"}`}
        key="og:type"
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />

      {APP_URL && (
        <meta
          name="og:url"
          content={`${APP_URL.endsWith("/") ? APP_URL : `${APP_URL}/`}${
            type === "movie" ? "movie" : "tv"
          }/${id}`}
          key="og:url"
        />
      )}

      {image && (
        <meta
          name="og:image"
          content={`https://image.tmdb.org/t/p/original${image}`}
          key="og:image"
        />
      )}
      {image && (
        <meta
          name="og:image:alt"
          content={`Poster for ${title}`}
          key="og:image:alt"
        />
      )}
      {image && (
        <meta
          name="twitter:image"
          content={`https://image.tmdb.org/t/p/original${image}`}
          key="twitter:image"
        />
      )}
      {image && (
        <meta
          name="twitter:image:alt"
          content={`Poster for ${title}`}
          key="twitter:image:alt"
        />
      )}
    </Head>
  );
};

export default ResultMeta;
