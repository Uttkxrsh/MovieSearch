import ISearchResult from "@/types/ISearchResult";
import ISearchResultItem from "@/types/ISearchResultItem";

const search = async (query: string): Promise<ISearchResultItem[] | null> => {
  const request = await fetch(`/api/search?q=${query}`);

  if (!request.ok) {
    return null;
  }

  const { results } = await request.json();

  return results;
};

export default search;
