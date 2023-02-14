export default interface ITvSearchResult {
  poster_path: string | null;
  popularity: string;
  id: number;
  overview: string;
  backdrop_path: string | null;
  vote_average: number;
  media_type: "tv";
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}
