export type ProductCategory = 'TODOS' | 'ROSTO' | 'OLHO' | 'BOCA';

export interface Product {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  description: string;
  category: 'ROSTO' | 'OLHO' | 'BOCA';
  imageUrl: string;
  paymentUrl: string;
  badge?: string;
  rating?: number;
}
