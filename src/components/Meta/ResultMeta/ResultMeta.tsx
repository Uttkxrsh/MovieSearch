import { APP_TITLE, APP_URL } from "@/lib/constants";
import Head from "next/head";
import { FC } from "react";
import { IProps } from "./ResultMeta.types";

// TODO: Default image
const ResultMeta: FC<IProps> = ({
  title,
  image,
  type,
  id,
  rating,
  ratingCount,
}) => {
  return (
    <Head key="meta">
      <title key="page_title">{`${title} - ${APP_TITLE}`}</title>
      <meta
        property="og:title"
        content={`${title} - ${APP_TITLE}`}
        key="og:title"
      />
      <meta
        name="twitter:title"
        content={`${title} - ${APP_TITLE}`}
        key="twitter:title"
      />

      <meta key="og:rating" property="og:rating" content={rating.toFixed(1)} />
      <meta key="og:rating_scale" property="og:rating_scale" content="10" />
      <meta
        key="og:rating_count"
        property="og:rating_count"
        content={`${ratingCount}`}
      />

      <meta
        name="description"
        content={`Find where to watch ${title}`}
        key="description"
      />
      <meta
        property="og:description"
        content={`Find where to watch ${title}`}
        key="og:description"
      />
      <meta
        name="twitter:description"
        content={`Find where to watch ${title}`}
        key="twitter:description"
      />

      <meta
        property="og:type"
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
          property="og:url"
          content={`${APP_URL.endsWith("/") ? APP_URL : `${APP_URL}/`}${
            type === "movie" ? "movie" : "tv"
          }/${id}`}
          key="og:url"
        />
      )}

      {image && (
        <meta
          property="og:image"
          content={`https://image.tmdb.org/t/p/original${image}`}
          key="og:image"
        />
      )}
      {image && (
        <meta
          property="og:image:alt"
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
