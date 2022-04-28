import Movie from "../../types/Movie";
import urlBuilder from "../urlBuilder";

export default async (id: string): Promise<Movie | null> => {
  const request = await fetch(urlBuilder(`/movie/${id}`));

  const response = await request.json();

  if (request.ok) {
    return response;
  }

  return null;
};
