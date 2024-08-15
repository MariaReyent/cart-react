import { Link } from "react-router-dom";

function Card({ clothing, handleAddToCart, numberOfItems }) {
  return (
    <>
      <div className="cardOtline">
        <div className="productHeader">
          <div className="cardName">{clothing.name}</div>
          <button className="addToCartBtn" onClick={handleAddToCart}>
            ADD TO CART
          </button>
          <button onClick={() => numberOfItems(clothing.id)}>
            Add Quantity
          </button>
        </div>

        <Link to={`detail/${clothing.id}`}>
          <img src={clothing.image} className="productImg" />
        </Link>
      </div>
    </>
  );
}

export default Card;
