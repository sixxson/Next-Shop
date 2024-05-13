import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    inStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    banner: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default ProductModel;

export type Product = {

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

