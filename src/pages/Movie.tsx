import { RouteComponentProps } from "@gatsbyjs/reach-router";

interface Props extends RouteComponentProps {
  id?: string;
}

const NotFound = ({ id }: Props) => {
  return <h1>Movie id: {id}</h1>;
};

export default NotFound;
