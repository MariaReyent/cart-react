import cart1 from "../assets/images/cart1.jpg";
import { Link } from "react-router-dom";
import { data } from "../data.js";
import Card from "../components/Card.jsx";
function Home({ handleAddToCart, numberOfItems }) {
  return (
    <>
      <div className="home">
        <Link>
          <div className="homeHeader">Home</div>
        </Link>
        <Link to="/cart">
          <img src={cart1} className="cartImg" />
        </Link>
      </div>
      <main className="mainGrid">
        {data.map((clothing) => {
          return (
            <Card
              clothing={clothing}
              key={clothing.id}
              handleAddToCart={() => handleAddToCart(clothing.id)}
              numberOfItems={() => numberOfItems(clothing.id)}
              id={clothing.id}
            />
          );
        })}
      </main>
    </>
  );
}

export default Home;
