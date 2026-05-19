export interface Product {
  productId: number;
  productName: string;
  productPrice: number;
  productDescription?: string;
  productCategory?: string;
  isExpire: boolean;
  mfg_date: Date;

}
