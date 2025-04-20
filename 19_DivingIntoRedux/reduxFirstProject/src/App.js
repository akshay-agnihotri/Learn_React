import Counter from "./components/Counter.js";
import Header from "./components/Header.js";
import Auth from "./components/Auth.js";
import { useSelector } from "react-redux";
import  UserProfile  from "./components/UserProfile.js";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      {isAuthenticated && <Header />}
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      {isAuthenticated && <Counter />}
    </>
  );
}

export default App;
