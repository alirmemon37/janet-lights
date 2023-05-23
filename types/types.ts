interface Product {
  readonly id?: string;
  name?: string;
  category?: string;
  productImageUrl?: string;
  company?: string;
  description?: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default Product;
