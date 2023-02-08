import IMovieSearchResult from "@/types/IMovieSearchResult";
import ISearchResultItem from "@/types/ISearchResultItem";

const isMovieSearchResult = (
  item: ISearchResultItem
): item is IMovieSearchResult => {
  return item.media_type === "movie";
};

export default isMovieSearchResult;
