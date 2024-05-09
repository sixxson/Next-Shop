export type Product = {
  _id?: number;
  name: string;
  slug: string;
  image: string;
  banner?: [
    banner_1: string,
    banner_2: string,
    banner_3: string,
    // banner_4?: string,
    // banner_5?: string,
  ];
  price: number;
  brand: string;
  description: string;
  category: string;
  rating: number;
  numReviews: number;
  inStock: number;
  sizes?: [
    // size_1?: string,
    // size_2?: string,
    // size_3?: string,
    // size_4?: string,
    // size_5?: string,
    // size_6?: string,
    // size_7?: string,
    // size_8?: string,
    // size_9?: string,
    // size_10?: string,
    // size_11?: string,
  ];
  colos?: [// colos_1?: string,
    // colos_2?: string,
    // colos_3?: string,
    // colos_4?: string,
    // colos_5?: string
  ];
};
