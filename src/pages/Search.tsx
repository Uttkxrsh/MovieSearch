import { RouteComponentProps } from "@gatsbyjs/reach-router";

interface Props extends RouteComponentProps {
  query?: string;
}

const Search = ({ query }: Props) => {
  return <h1>Search: {query}</h1>;
};

export default Search;
