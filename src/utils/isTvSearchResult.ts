import ISearchResultItem from "@/types/ISearchResultItem";
import ITvSearchResult from "@/types/ITvSearchResult";

const isTvSearchResult = (item: ISearchResultItem): item is ITvSearchResult => {
  return item.media_type === "tv";
};

export default isTvSearchResult;
