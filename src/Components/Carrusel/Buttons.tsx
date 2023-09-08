import "./navigate-btns.css";

export function Buttons() {
  //   const [move, moveleft] = useState(0);
  return (
    <>
      <div className="navigation-btns">
        <button className="left-btn"> &#60; </button>
        <button className="right-btn"> &#62; </button>
      </div>
    </>
  );
}
