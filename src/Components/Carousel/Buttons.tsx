import "./navigate-btns.css";

export function Buttons({ move, setMove, shoeInfo }) {
  const handleLeftClick = () => {
    const newMove = move - 1;
    if (newMove < 0) {
      setMove(shoeInfo.length);
    } else {
      setMove(newMove);
    }
  };

  const handleRightClick = () => {
    const newMove = move + 1;
    if (newMove < 0) {
      setMove(shoeInfo.length);
    } else {
      setMove(newMove);
    }
  };

  return (
    <>
      <div className="navigation-btns">
        <button className="left-btn" onClick={handleLeftClick}>
          {" "}
          &#60;{" "}
        </button>
        <button className="right-btn" onClick={handleRightClick}>
          {" "}
          &#62;{" "}
        </button>
      </div>
    </>
  );
}
