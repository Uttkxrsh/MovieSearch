import { IoIosArrowForward } from "react-icons/io";
import styles from "../style/Movie.module.scss";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  poster_path: string | null;
  title: string;
}

const Movie = ({ id, poster_path, title }: Props) => {
  return (
    <Link to={`/movie/${id}`} key={id} className={styles.movie}>
      <div>
        <div className={styles.imgWrapper}>
          <img
            alt={`Poster for ${title}`}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w92/${poster_path}`
                : "https://via.placeholder.com/100x150"
            }
          />
        </div>
        <p>{title}</p>
      </div>
      <IoIosArrowForward size="24px" color="white" />
    </Link>
  );
};

export default Movie;
