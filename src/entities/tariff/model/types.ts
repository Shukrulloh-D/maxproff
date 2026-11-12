export interface WorkGroup {
  title: string;
  items: string[];
}

export interface Tariff {
  id: string;
  name: string;
  duration: string;
  description: string;
  groups: WorkGroup[];
  oldPrice: number;
  price: number;
  image: string;
}
