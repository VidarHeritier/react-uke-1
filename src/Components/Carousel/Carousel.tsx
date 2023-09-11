import { useState } from "react";
import ShoeCards from "../Shoes";
import { Counter } from "../Counter/Counter";
import { Buttons } from "./Buttons";
import { shoeInfo } from "../Shoes";

import "./navigate-btns.css";

// interface ShoeInfo {
//   img: string;
//   shoeName: string;
//   brand: string;
//   description: string;
//   price: string;
//   id: string;
// }

function Carousel() {
  const [move, setMove] = useState(0);

  return (
    <>
      <Buttons move={move} setMove={setMove} />

      <div
        className="cards"
        style={{
          transform: `translateX(-${move * 30}%)`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {shoeInfo.map((shoe) => {
          return (
            <div key={shoe.id}>
              <ShoeCards
                img={shoe.img}
                brand={shoe.brand}
                shoeName={shoe.shoeName}
                description={shoe.description}
                price={shoe.price}
                id={shoe.id}
              />
              <Counter />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Carousel;
