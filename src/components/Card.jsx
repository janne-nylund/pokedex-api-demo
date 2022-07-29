import { v4 as uuidv4 } from "uuid";

const Card = ({ details, index }) => {
    return (
        <div>
            <h2>{details[index].name}</h2>
            <div className="sprite-wrapper">
                <img
                    className="sprite"
                    src={details[index].src}
                    alt={details[index].name}
                />
            </div>
            <p>
                <b>Type:</b>&nbsp;
                {details[index].type.map((type) => (
                    <span key={uuidv4()} className="types">
                        {type.type.name}
                    </span>
                ))}
            </p>
            <div className="description">{details[index].description}</div>
        </div>
    );
};

export default Card;
