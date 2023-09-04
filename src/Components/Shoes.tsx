import img1 from "../Imgs/imani-bahati-LxVxPA1LOVM-unsplash.jpg";
import img2 from "../Imgs/kris-gerhard-0BKZfcamvGg-unsplash.jpg";
import img3 from "../Imgs/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg";
export const shoeInfo = [
  {
    img: img1,
    shoeName: "Space Explorers",
    brand: "Galaxxy",
    description:
      "Fantasmagolical space walk sneakers from the depth of the universe",
    price: "$1349$",
    id: "4r4f",
  },
  {
    img: img2,
    shoeName: "Logger Joggers",
    brand: "Lumber",
    description: "Wooderful natural feel made for outdoor activities",
    price: "$1287$",
    id: "3f33f",
  },
  {
    img: img3,
    shoeName: "Concrete Chaos",
    brand: "Tarmac Shoe Comp",
    description: "Thread the urban streets in ultimate comfort",
    price: "$1199$",
    id: "22ss2",
  },
];

interface ShoeCardProps {
  img: string;
  shoeName: string;
  brand: string;
  description: string;
  price: string;
  id: string;
}

export default function ShoeCards(properties: ShoeCardProps) {
  const { img, shoeName, brand, description, price } = properties;

  return (
    <>
      <div className="shoes">
        <img src={img} />
        <h3>{shoeName}</h3>
        <h4>{brand}</h4>
        <h5>{description}</h5>
        <p>{price}</p>
      </div>
    </>
  );
}
