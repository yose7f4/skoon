// Product types for the Sukoon store

export interface Product {
  id: number;
  slug: string;
  name: string;
  nameAr?: string;
  description: string;
  price: number;
  currency: string;
  category: 'consumer' | 'b2b';
  style: 'nest' | 'teardrop' | 'lounger' | 'ottoman' | 'cushion';
  colors: ProductColor[];
  images: string[];
  features: string[];
  dimensions: string;
  weight: string;
  inStock: boolean;
}

export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface CartItem {
  product: Product;
  selectedColor: ProductColor;
  quantity: number;
}

export interface CustomOrder {
  id?: number;
  companyName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  beanBagStyle: 'nest' | 'teardrop' | 'lounger' | 'ottoman' | 'cushion';
  preferredColor: string;
  quantity: number;
  logoUrl?: string;
  notes?: string;
  createdAt?: string;
}
