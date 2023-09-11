import "./navigate-btns.css";

interface ButtonsProps {
  move: number;
  setMove: React.Dispatch<React.SetStateAction<number>>;
  shoeInfo: [];
}

export function Buttons({ move, setMove, shoeInfo }: ButtonsProps) {
  const handleLeftClick = () => {
    const newMove = move - 1;
    if (newMove < 0) {
      setMove(shoeInfo.length - 1);
    } else {
      setMove(newMove);
    }
  };

  const handleRightClick = () => {
    const newMove = move + 1;
    if (newMove >= shoeInfo.length) {
      setMove(0);
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
