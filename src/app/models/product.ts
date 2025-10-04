export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  tag?: 'nuevo' | 'oferta';
  gender?: 'H' | 'M' | 'U';
}
