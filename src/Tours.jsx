import { useState } from "react";
const Tours = ({ remove, image, id, info, name, price }) => {
  const [exp, setexp] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p style={{ padding: "13px" }}>
          {exp ? info : `${info.substring(0, 200)}....`}
        </p>
        <button className="info-btn" onClick={() => setexp(!exp)}>
          {exp ? "Show less" : "Show More"}
        </button>
        <button className="btn btn-block btn-delete" onClick={() => remove(id)}>
          delete
        </button>
      </div>
    </article>
  );
};
export default Tours;
