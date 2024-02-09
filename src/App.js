import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Main from "./Components/Main";
import Changeinstagram from "./Components/Changeinstagram";
import Checktypeinstagram from "./Components/Checktypeinstagram";
import Checkinstafacebook from "./Components/Checkinstaisfacebook";
import Linkinstagram from "./Components/Linkinstagram";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="/check-type-of-instagram-account"
          element={<Checktypeinstagram />}
        ></Route>
        <Route
          path="/change-type-of-instagram-account"
          element={<Changeinstagram />}
        ></Route>
        <Route
          path="/check-if-instagram-account-is-linked-to-facebook-page"
          element={<Checkinstafacebook />}
        ></Route>
        <Route
          path="/link-instagram-account-to-facebook-page"
          element={<Linkinstagram />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
