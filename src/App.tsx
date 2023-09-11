import { Header } from "./Components/Header";
import "./App.css";
import { Form } from "./Components/Form/Form";
import Carousel from "./Components/Carousel/Carousel";
import { Buy } from "./Components/Buy";

function App() {
  return (
    <>
      <div className="nav">
        <Header />
        <Form />
        <Buy />
      </div>
      <div>
        <Carousel />
      </div>
    </>
  );
}

export default App;
