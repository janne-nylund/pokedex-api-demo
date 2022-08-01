import { useEffect, useState } from "react";

const Buttons = ({ index, setIndex, flipped }) => {
  const [hideButtons, setHideButtons] = useState(false)

  useEffect(() => {
    if (flipped) {
      setTimeout(() => {
        setHideButtons(true)
      }, 200);


    } else {
      setTimeout(() => {
        setHideButtons(false)
      }, 200);
    }

  }, [flipped])

  return (
    <div hidden={hideButtons ? true : null} className="btn-wrapper">
      <button
        className="btn"
        hidden={hideButtons ? true : null}
        disabled={index === 0}
        onClick={() => setIndex((prev) => prev - 1)}
      >
        prev
      </button>
      <span></span>
      <button
        className="btn"
        hidden={hideButtons ? true : null}
        disabled={index === 150}
        onClick={() => setIndex((prev) => prev + 1)}
      >
        next
      </button>
    </div>
  );
};

export default Buttons;
