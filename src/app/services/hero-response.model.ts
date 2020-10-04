export interface HeroResponse {
  _id: string;
  id: string;
  ranking: string[];
  name: string;
  specialty: string;
  rent: number;
  hired?: boolean;
}
