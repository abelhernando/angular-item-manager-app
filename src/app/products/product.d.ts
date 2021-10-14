declare module 'uuid';

interface ProductsResponse {
  products: IProduct[];
  totalCount: number;
  pageCount: number;
}

interface ProductRaw {
  title: string;
  description: string;
  price: string;
  email: string;
  image: string;
}

interface IProduct extends ProductRaw {
  isFavorite: boolean;
}

interface GetProductsParams {
  search: string;
  page: number;
  sort?: any;
}

interface Sort {
  field?: keyof ProductRaw;
  sort?: 'asc' | 'desc';
}
