import { Link } from "react-router-dom";
import CartItems from "../components/CartItems";

function CartPage({ added, cartItem, numberOfItems }) {
  const totalPrice = cartItem.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  return (
    <>
      <div className="mappedCartItems">
        {!added ? (
          <div className="noItems">
            <h1>No Items in the Cart</h1>
          </div>
        ) : (
          <div>
            {cartItem.map((item, index) => (
              <CartItems
                item={item}
                key={index}
                id={item.id}
                numberOfItems={() => numberOfItems(item.id)}
              />
            ))}
          </div>
        )}
        <div className="checkout">
          <h1 className="checkTitle">CHECK OUT</h1>
          <div>Total Price:{added ? totalPrice : 0}</div>
        </div>
      </div>
      <div className="cartBtn">
        <Link to="/">
          <button className="cartBackBtn">Go Back</button>
        </Link>
      </div>
    </>
  );
}

export default CartPage;
