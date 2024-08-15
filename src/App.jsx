import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import CartPage from "./pages/CartPage";
import { useEffect, useState } from "react";

function App() {
  const [cartItem, setCartItem] = useState([]);

  function handleAddToCart(item) {
    return setCartItem((prevI) => [...prevI, item]);
  }

  function numberOfItems(id) {
    const existingItem = cartItem.find((item) => item.id === id);
    return existingItem;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          handleAddToCart={() => handleAddToCart()}
          numberOfItems={numberOfItems}
        />
      ),
    },
    {
      path: "/detail/:id",
      element: (
        <Detail
          handleAddToCart={() => handleAddToCart()}
          numberOfItems={numberOfItems}
        />
      ),
    },
    {
      path: "/cart",
      element: <CartPage />,
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
