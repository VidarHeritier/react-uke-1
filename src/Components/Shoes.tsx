import img1 from "../Imgs/imani-bahati-LxVxPA1LOVM-unsplash.jpg";
import img2 from "../Imgs/kris-gerhard-0BKZfcamvGg-unsplash.jpg";
import img3 from "../Imgs/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg";
import { Counter } from "./Counter/Counter";
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
  {
    img: "",
    shoeName: "Trailblazer XT",
    brand: "HikeMaster",
    description: "Tackle the roughest trails with confidence",
    price: "$1499$",
    id: "1a2b3c",
  },
  {
    img: "",
    shoeName: "City Lights",
    brand: "UrbanGlide",
    description: "Experience the city in style and comfort",
    price: "$1099$",
    id: "xyz123",
  },
  {
    img: "",
    shoeName: "Beach Bum",
    brand: "Sun & Sand",
    description: "Perfect for lazy days by the beach",
    price: "$899$",
    id: "7d8e9f",
  },
  {
    img: "",
    shoeName: "High Voltage",
    brand: "ElectroKicks",
    description: "Energize your day with these electrifying sneakers",
    price: "$1599$",
    id: "pqr456",
  },
  {
    img: "",
    shoeName: "Mountain Majesty",
    brand: "Summit Seeker",
    description: "Conquer the highest peaks with these sturdy boots",
    price: "$1799$",
    id: "qwe789",
  },
  {
    img: "",
    shoeName: "Classic Comfort",
    brand: "CozyWalk",
    description: "Timeless design meets unmatched comfort",
    price: "$999$",
    id: "jkl321",
  },
  {
    img: "",
    shoeName: "Rainy Day Runners",
    brand: "AquaRun",
    description: "Stay dry and active on rainy days",
    price: "$1299$",
    id: "mno654",
  },
  {
    img: "",
    shoeName: "Tech Trekker",
    brand: "DigitalWalk",
    description: "Connect to the digital world while you walk",
    price: "$1399$",
    id: "abc987",
  },
  {
    img: "",
    shoeName: "Vintage Vibes",
    brand: "RetroStep",
    description: "Bring back the classic style with these vintage kicks",
    price: "$1099$",
    id: "vintage123",
  },
  {
    img: "",
    shoeName: "Sprint Master",
    brand: "Speedster",
    description: "Designed for speed and agility on the track",
    price: "$1699$",
    id: "fastlane456",
  },
  {
    img: "",
    shoeName: "Camo Comfort",
    brand: "Stealth Mode",
    description: "Blend in and stand out with camouflage style",
    price: "$1399$",
    id: "camo789",
  },
  {
    img: "",
    shoeName: "Cloud Walkers",
    brand: "SkyStep",
    description: "Feel like you're walking on clouds with these shoes",
    price: "$1299$",
    id: "cloud9",
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
