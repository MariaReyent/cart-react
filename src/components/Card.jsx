import { Link } from "react-router-dom";

function Card({ clothing, handleAddToCart, numberOfItems, added }) {
  return (
    <>
      <div className="cardOtline">
        <div className="buttonsForProduct">
          <div className="productHeader">
            <div className="cardName">{clothing.name}</div>{" "}
          </div>
          <button
            className="addToCartBtn"
            onClick={() => handleAddToCart(clothing)}
            disabled={added}
          >
            {added ? "Added" : "Add to cart"}
          </button>
          {/* <button
            onClick={() => numberOfItems(clothing.id)}
            className="addQBtn"
          >
            Add Quantity
          </button> */}
        </div>

        <Link to={`detail/${clothing.id}`}>
          <img src={clothing.image} className="productImg" />
        </Link>
      </div>
    </>
  );
}

export default Card;
