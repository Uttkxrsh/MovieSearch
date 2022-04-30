import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import NotFound from "./NotFound";
import styles from "../style/MoviePage.module.scss";
import { BsDot } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoMdStar } from "react-icons/io";
import { FaImdb } from "react-icons/fa";
import urlBuilder from "../utils/urlBuilder";
import PlatformSelect from "../components/PlatformSelect";
import { paramCase } from "change-case";
import tmdbLogo from "../assets/tmdb_logo.svg";

interface Props {}

const Movie = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //Use prop to fetch movie?
  const [loading, setLoading] = useState<boolean>(true);
  const [movie, notFound] = useMovie(id ?? "0");

  useEffect(() => {
    setLoading(false);
  }, [movie]);

  if (loading) return <h1>Loading</h1>;

  if (notFound || !movie) return <NotFound />;

  return (
    <div>
      <div
        className={`${styles.backdropContainer} ${
          movie.backdrop_path ? styles.noBackdrop : styles.isBackdrop
        }`}
      >
        {movie.backdrop_path && (
          <img
            className={styles.backdrop}
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          />
        )}
      </div>
      <div className={styles.main}>
        <div>
          <p className={styles.back} onClick={() => navigate(-1)}>
            {"< Back"}
          </p>
          <h1>{movie.title}</h1>
          <div className={styles.movieMeta}>
            <p>{new Date(movie.release_date).getFullYear()}</p>
            <GoPrimitiveDot size="12px" />
            <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
          {movie.overview && (
            <p className={styles.description}>{movie.overview}</p>
          )}
          <div className={styles.moreInfo}>
            <div className={styles.rating}>
              <IoMdStar />
              <p>{movie.vote_average}</p>
            </div>
            <GoPrimitiveDot size="12px" className={styles.separator} />
            <div className={styles.links}>
              {movie.imdb_id && (
                <a href={`https://www.imdb.com/title/${movie.imdb_id}`}>
                  <FaImdb size="32px" />
                </a>
              )}
              <a
                href={`https://www.themoviedb.org/movie/${movie.id}-${paramCase(
                  movie.title
                )}`}
              >
                <img src={tmdbLogo} />
              </a>
            </div>
          </div>
          <PlatformSelect movieId={movie.id} />
        </div>
      </div>
    </div>
  );
};

export default Movie;
