import image from "../Imgs/icons8-shopping-cart-64 (1).png";
// import { Counter } from "./Counter/Counter";

export function Buy() {
  return (
    <>
      <div className="buy">
        <h2></h2>
        <img src={image} className="cart"></img>
        <h2>BUY!!</h2>
      </div>
    </>
  );
}
