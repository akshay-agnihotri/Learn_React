import Counter from "./components/Counter.js";
import Header from "./components/Header.js";
import Auth from "./components/Auth.js";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      {isAuthenticated && <Header />}
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <Counter />}
    </>
  );
}

export default App;
