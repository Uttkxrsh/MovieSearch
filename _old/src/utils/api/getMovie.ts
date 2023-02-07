import Movie from "../../types/Movie";
import urlBuilder from "../urlBuilder";

const getMovie = async (id: string): Promise<Movie | null> => {
  const request = await fetch(urlBuilder(`/movie/${id}`));

  const response = await request.json();

  if (request.ok) {
    return response;
  }

  return null;
};

export default getMovie;
