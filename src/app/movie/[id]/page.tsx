import { FC } from "react";

interface Props {
  params: {
    id: string;
  };
}

const Movie: FC<Props> = ({ params }) => {
  const { id } = params;
  return <h1>Movie {id}</h1>;
};

export default Movie;
