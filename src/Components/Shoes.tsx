import img1 from "../assets/Imgs/imani-bahati-LxVxPA1LOVM-unsplash.jpg";
import img2 from "../assets/Imgs/kris-gerhard-0BKZfcamvGg-unsplash.jpg";
import img3 from "../assets/Imgs/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg";
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
    name: "Logger Joggers",
    brand: "Lumber",
    description: "Wooderful natural feel made for outdoor activities",
    price: "$1287$",
    id: "3f33f",
  },
  {
    img: img3,
    name: "Concrete Chaos",
    brand: "Tarmac Shoe Comp",
    description: "Thread the urban streets in ultimate comfort",
    price: "$1199$",
    id: "22ss2",
  },
];

export default function ShoeCards(properties) {
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
