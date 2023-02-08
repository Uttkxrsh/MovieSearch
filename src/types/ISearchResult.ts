import IMovieSearchResult from "./IMovieSearchResult";
import ITvSearchResult from "./ITvSearchResult";

export default interface ISearchResult {
  page: number;
  result: (IMovieSearchResult | ITvSearchResult)[];
  total_results: number;
  total_pages: number;
}
