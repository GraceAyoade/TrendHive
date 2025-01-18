import purpleShirt from "./purple-t-shirt.jpg";
import greenShirt from "./green-t-shirt.jpg";
import bridalShoe from "./clear-bridal-shoes-with-crystal-decoration.jpg";
import logo from "./cartify-logo3.png";

export const assets = {
   logo,
  purpleShirt,
  greenShirt,
  bridalShoe,
};

export const products = [
  {
    id: 1,
    name: "Purple Shirt",
    description: "A lightweight, high-quality purple shirt.",
    price: 30,
    image: [purpleShirt, greenShirt],
    category: ["Women", "Men"],
    subCategory: "Tees",
    sizes: ["S", "M", "L", "XL"],
    date: "2022-01-01",
    bestseller: true,
  },
  {
    id: 1,
    name: "Purple Shirt",
    description: "A lightweight, high-quality purple shirt.",
    price: 30,
    image: [bridalShoe],
    category: ["Women", "Men"],
    subCategory: "Tees",
    sizes: ["S", "M", "L", "XL"],
    date: "2022-01-01",
    bestseller: false,
  },
  {
    id: 1,
    name: "Ladies Shirt",
    description: "A lightweight, high-quality purple shirt.",
    price: 30,
    image: [],
    category: ["Women", "Men"],
    subCategory: "Tees",
    sizes: ["S", "M", "L", "XL"],
    date: "2022-01-01",
    bestseller: false,
  },
];
