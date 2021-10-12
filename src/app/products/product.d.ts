interface Product {
  title: string;
  description: string;
  price: string;
  email: string;
  image: string;
}

interface ProductsResponse {
  products: Product[];
  totalCount: number;
  pageCount: number;
}
