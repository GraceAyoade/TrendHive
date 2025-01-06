export interface IProducts {
  id?: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string | [];
  subCategory?: string;
  sizes?: string[];
  date?: Date;
  bestseller?: boolean;
}
