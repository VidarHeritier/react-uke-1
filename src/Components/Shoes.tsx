import img1 from "../Imgs/imani-bahati-LxVxPA1LOVM-unsplash.jpg";
import img2 from "../Imgs/kris-gerhard-0BKZfcamvGg-unsplash.jpg";
import img3 from "../Imgs/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg";
import img4 from "../Imgs/ca-creative-Fc2KdQ2QaVs-unsplash.jpg";
import img5 from "../Imgs/domino-164_6wVEHfI-unsplash.jpg";
import img6 from "../Imgs/erik-mclean-1XHPuWvMQ8Q-unsplash.jpg";
import img7 from "../Imgs/grailify-ju4-jsQ8jmk-unsplash.jpg";
import img8 from "../Imgs/joel-muniz-Oj-V9tXTKtY-unsplash.jpg";
import img9 from "../Imgs/imani-bahati-LxVxPA1LOVM-unsplash.jpg";
import img10 from "../Imgs/nikita-kachanovsky-ad_0wMHtvlU-unsplash.jpg";
import img11 from "../Imgs/ox-street-Le0o8Ac_Eco-unsplash.jpg";
import img12 from "../Imgs/ryan-plomp-PGTO_A0eLt4-unsplash.jpg";
import img13 from "../Imgs/usama-akram-s-gYAbQToXk-unsplash.jpg";
import img14 from "../Imgs/usama-akram-kP6knT7tjn4-unsplash.jpg";
import img15 from "../Imgs/usama-akram-g3CMh2nqj_w-unsplash.jpg";

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
    img: img4,
    shoeName: "Trailblazer XT",
    brand: "HikeMaster",
    description: "Tackle the roughest trails with confidence",
    price: "$1499$",
    id: "1a2b3c",
  },
  {
    img: img5,
    shoeName: "City Lights",
    brand: "UrbanGlide",
    description: "Experience the city in style and comfort",
    price: "$1099$",
    id: "xyz123",
  },
  {
    img: img6,
    shoeName: "Beach Bum",
    brand: "Sun & Sand",
    description: "Perfect for lazy days by the beach",
    price: "$899$",
    id: "7d8e9f",
  },
  {
    img: img7,
    shoeName: "High Voltage",
    brand: "ElectroKicks",
    description: "Energize your day with these electrifying sneakers",
    price: "$1599$",
    id: "pqr456",
  },
  {
    img: img8,
    shoeName: "Mountain Majesty",
    brand: "Summit Seeker",
    description: "Conquer the highest peaks with these sturdy boots",
    price: "$1799$",
    id: "qwe789",
  },
  {
    img: img9,
    shoeName: "Classic Comfort",
    brand: "CozyWalk",
    description: "Timeless design meets unmatched comfort",
    price: "$999$",
    id: "jkl321",
  },
  {
    img: img10,
    shoeName: "Rainy Day Runners",
    brand: "AquaRun",
    description: "Stay dry and active on rainy days",
    price: "$1299$",
    id: "mno654",
  },
  {
    img: img11,
    shoeName: "Tech Trekker",
    brand: "DigitalWalk",
    description: "Connect to the digital world while you walk",
    price: "$1399$",
    id: "abc987",
  },
  {
    img: img12,
    shoeName: "Vintage Vibes",
    brand: "RetroStep",
    description: "Bring back the classic style with these vintage kicks",
    price: "$1099$",
    id: "vintage123",
  },
  {
    img: img13,
    shoeName: "Sprint Master",
    brand: "Speedster",
    description: "Designed for speed and agility on the track",
    price: "$1699$",
    id: "fastlane456",
  },
  {
    img: img14,
    shoeName: "Camo Comfort",
    brand: "Stealth Mode",
    description: "Blend in and stand out with camouflage style",
    price: "$1399$",
    id: "camo789",
  },
  {
    img: img15,
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
