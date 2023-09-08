import { Header } from "./Components/Header";
import "./App.css";
import ShoeCards from "./Components/Shoes";
import { shoeInfo } from "./Components/Shoes";
import { Counter } from "./Components/Counter/Counter";
import { Form } from "./Components/Form/Form";
import { Buttons } from "./Components/Carrusel/Buttons";

function App() {
  return (
    <>
      <div className="nav">
        <Header />
        <Form />
      </div>
      <div>
        <Buttons />
      </div>

      <div className="cards">
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

export default App;
