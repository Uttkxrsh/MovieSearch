import { RouteComponentProps } from "@gatsbyjs/reach-router";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "../style/Home.module.scss";

interface Props extends RouteComponentProps {}

const Home = ({}: Props) => {
  const [query, setQuery] = useState<string>("");

  return (
    <div className={styles.container}>
      <div>
        <h1>Search for a movie</h1>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <AiOutlineSearch size="26px" color="#ffffff" />
          </div>
          <div className={styles.searchResults}>{query}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
