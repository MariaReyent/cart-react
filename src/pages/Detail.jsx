import { Link, useParams } from "react-router-dom";
import { data } from "../data";

function Detail() {
  const { id } = useParams();
  const clothing = data.find((item) => item.id === +id);

  if (!clothing) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="detail">
        <h2>{clothing.name}</h2>
        <img src={clothing.image} className="detailImg" />

        <Link to="/">
          <button className="goBackDetailBtn">Go Back</button>
        </Link>
      </div>
    </>
  );
}

export default Detail;
