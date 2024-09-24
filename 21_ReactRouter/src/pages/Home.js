import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      {/* <p>
        go to <a href="/products">Products page</a>
      </p> */}

      <p>
        go to <Link to="/products">Products page</Link>
      </p>
    </>
  );
}

export default HomePage;
