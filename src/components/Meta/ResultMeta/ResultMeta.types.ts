export interface IProps {
  title: string;
  image?: string | null;
  type: "movie" | "tv";
  id: string;
  rating: number;
  ratingCount: number;
}
