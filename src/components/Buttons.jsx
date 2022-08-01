const Buttons = ({ index, setIndex, flipped }) => {
    return (
        <div hidden={flipped ? true : null} className="btn-wrapper">
            <button
                className="btn"
                hidden={flipped ? true : null}
                disabled={index === 0}
                onClick={() => setIndex((prev) => prev - 1)}
            >
                prev
            </button>
            <span></span>
            <button
                className="btn"
                hidden={flipped ? true : null}
                disabled={index === 150}
                onClick={() => setIndex((prev) => prev + 1)}
            >
                next
            </button>
        </div>
    );
};

export default Buttons;
