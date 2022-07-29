const Buttons = ({ index, setIndex }) => {
    return (
        <div className="btn-wrapper">
            <button
                className="btn"
                disabled={index === 0}
                onClick={() => setIndex((prev) => prev - 1)}
            >
                prev
            </button>
            <span></span>
            <button
                className="btn"
                disabled={index === 150}
                onClick={() => setIndex((prev) => prev + 1)}
            >
                next
            </button>
        </div>
    );
};

export default Buttons;
