import ISearchResultItem from "./ISearchResultItem";

export default interface ISearchResult {
  page: number;
  result: ISearchResultItem[];
  total_results: number;
  total_pages: number;
}
