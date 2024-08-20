function CartItems({ item, numberOfItems }) {
  return (
    <>
      <div className="cartItemsContainer">
        <img src={item.image} className="cartImage" />
        <div className="priceName">
          <div className="cartItemName">{item.name}</div>
          <div>Price:{item.price}</div>
        </div>

        <button onClick={() => numberOfItems(item.id)} className="addQBtn">
          Add Quantity
        </button>
        <div>{item.quantity}</div>
      </div>
    </>
  );
}

export default CartItems;
