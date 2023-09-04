import { Header } from "./Components/Header";
import "./App.css";
import ShoeCards from "./Components/Shoes";
import { shoeInfo } from "./Components/Shoes";

function App() {
  return (
    <>
      <Header />
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
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
