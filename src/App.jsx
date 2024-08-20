import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import CartPage from "./pages/CartPage";
import { useState } from "react";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [added, setAdded] = useState(false);

  function handleAddToCart(item) {
    setAdded((prevAdded) => ({
      ...prevAdded,
      [item.id]: true,
    }));
    return setCartItem((prevI) => [...prevI, { ...item, quantity: 1 }]);
  }

  function numberOfItems(id) {
    setCartItem((prevI) => {
      return prevI.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity ? item.quantity + 1 : 1 };
        } else {
          return item;
        }
      });
    });
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          cartItem={cartItem}
          added={added}
          handleAddToCart={(item) => handleAddToCart(item)}
          numberOfItems={(id) => numberOfItems(id)}
        />
      ),
    },
    {
      path: "/detail/:id",
      element: (
        <Detail
          handleAddToCart={(item) => handleAddToCart(item)}
          numberOfItems={(id) => numberOfItems(id)}
        />
      ),
    },
    {
      path: "/cart",
      element: (
        <CartPage
          cartItem={cartItem}
          added={added}
          numberOfItems={(id) => numberOfItems(id)}
        />
      ),
    },
  ]);

  console.log(cartItem);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
