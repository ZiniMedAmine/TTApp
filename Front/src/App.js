import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/Home";
import Ticket from "./pages/ticket";
import Sport from "./pages/Sport";
import Excursion from "./pages/Excursion";
import Profile from "./pages/profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/ticket" element={<Ticket />}></Route>
          <Route path="/sport" element={<Sport />}></Route>
          <Route path="/excursion" element={<Excursion />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
