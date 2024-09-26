import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }

  return (
    <>
      <h1>My Home Page</h1>
      {/* <p>
        go to <a href="/products">Products page</a>
      </p> */}

      <p>
        go to <Link to="/products">Products page</Link>
      </p>
      <p>
        {/*here we have taken btn to demontrate but it should be a link*/}
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
