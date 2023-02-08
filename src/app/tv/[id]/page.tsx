import { FC } from "react";

interface Props {
  params: {
    id: string;
  };
}

const Tv: FC<Props> = ({ params }) => {
  const { id } = params;

  return <h1>TV {id}</h1>;
};

export default Tv;
