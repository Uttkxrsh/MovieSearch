import { Router } from "@gatsbyjs/reach-router";
import Home from "./pages/Home";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Movie from "./pages/Movie";

function App() {
  return (
    <Router>
      <Home path="/" />
      <Search path="/search/:query" />
      <Movie path="/movie/:id" />
      <NotFound default />
    </Router>
  );
}

export default App;
