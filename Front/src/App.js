import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/Home";
import Ticket from "./pages/ticket";
import Sport from "./pages/Sport";
import Excursion from "./pages/Excursion";
import Profile from "./pages/profile";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Location changed!", location.pathname);
    const token = localStorage.getItem("token");

    if (location.pathname != "/" && location.pathname != "/signup") {
      axios
        .post("http://localhost:3001/users/verify", {
          token: token,
        })
        .then(({ data }) => {
          if (!data.verified) {
            navigate("/");
          }
        })
        .catch(() => {
          localStorage.removeItem("token");
          navigate("/");
        });
    } else {
      if (token) {
        navigate("/home");
      }
    }
  }, [location]);

  return (
    <div>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/ticket" element={<Ticket />}></Route>
        <Route path="/sport" element={<Sport />}></Route>
        <Route path="/excursion" element={<Excursion />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
