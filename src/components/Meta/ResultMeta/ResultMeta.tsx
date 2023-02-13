"use client";

import { APP_URL } from "@/lib/constants";
import { FC } from "react";
import { Helmet } from "react-helmet";
import { IProps } from "./ResultMeta.types";

// TODO: Default image
const ResultMeta: FC<IProps> = ({ title, image, type, id }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />

      <meta name="description" content={`Find where to watch ${title}`} />
      <meta
        property="twitter:description"
        content={`Find where to watch ${title}`}
      />

      <meta
        property="og:type"
        content={`video.${type === "movie" ? "movie" : "tv_show"}`}
      />
      <meta property="twitter:card" content="summary_large_image" />

      {APP_URL && (
        <meta
          property="og:url"
          content={`${APP_URL.endsWith("/") ? APP_URL : `${APP_URL}/`}${
            type === "movie" ? "movie" : "tv"
          }/${id}`}
        />
      )}

      {image && (
        <meta
          property="og:image"
          content={`https://image.tmdb.org/t/p/original${image}`}
        />
      )}
      {image && (
        <meta property="og:image:alt" content={`Poster for ${title}`} />
      )}
      {image && (
        <meta
          property="twitter:image"
          content={`https://image.tmdb.org/t/p/original${image}`}
        />
      )}
      {image && (
        <meta property="twitter:image:alt" content={`Poster for ${title}`} />
      )}
    </Helmet>
  );
};

export default ResultMeta;
