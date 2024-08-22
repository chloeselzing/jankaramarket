import { StaticImageData } from "next/image";
import gro1 from "../../public/groceries/gro1.jpeg";
import products from '@/data/product.json'

type CardProps = {
  image: string;
  title: string;
  price: number;
  onClick?: () => void;
};

export const CardData: CardProps[] =  products.map(product => ({
  image: product.image,
  title: product.title,
  price: product.price
}))
