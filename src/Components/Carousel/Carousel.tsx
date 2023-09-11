import { useState } from "react";
import ShoeCards from "../Shoes";
import { Counter } from "../Counter/Counter";
import { Buttons } from "./Buttons";
import { shoeInfo } from "../Shoes";

import "./navigate-btns.css";

function Carousel() {
  const [move, setMove] = useState(0);

  return (
    <>
      <Buttons move={move} setMove={setMove} shoeInfo={shoeInfo} />

      <div
        className="cards"
        style={{
          transform: `translateX(-${move * 30}%)`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {shoeInfo.map((shoeInfo) => {
          return (
            <div key={shoeInfo.id}>
              <ShoeCards
                img={shoeInfo.img}
                brand={shoeInfo.brand}
                shoeName={shoeInfo.shoeName}
                description={shoeInfo.description}
                price={shoeInfo.price}
                id={shoeInfo.id}
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
