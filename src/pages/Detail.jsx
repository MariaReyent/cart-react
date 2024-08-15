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
      <div>Detail</div>
      <h2>{clothing.name}</h2>

      <Link to="/">
        <button>Go Back</button>
      </Link>
    </>
  );
}

export default Detail;
