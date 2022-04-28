import { RouteComponentProps } from "@gatsbyjs/reach-router";

interface Props extends RouteComponentProps {}

const NotFound = ({}: Props) => {
  return <h1>Not found</h1>;
};

export default NotFound;
