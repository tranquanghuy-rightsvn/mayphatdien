export interface Category {
  slug: string;
  name: string;
  icon: string;
}

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  slug: string;
  name: string;
  categorySlug: string;
  price: string;
  thumbnail: string;
  images: ProductImage[];
  colors: string[];
  year: string;
  condition: string;
  warranty: string;
  views: number;
  seats: string;
  bodyType: string;
  fuel: string;
  origin: string;
  otherInfo: string[];
  description: string;
}

export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  body: string[];
  promoted?: boolean;
}

export interface PolicyPage {
  slug: string;
  title: string;
}

export interface SaleContact {
  name: string;
  phone: string;
  email: string;
  zaloUrl: string;
  skypeUrl: string;
  viberUrl: string;
}
