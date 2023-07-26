import { useEffect } from "react";
import ExcursionIcon from "../img/excursion.png";
import "./Excursion.css";
import Navbar from "../components/navbar/Navb";
import ExcursionModal from "../components/excursion/ExcursionModal";
import ExcursionCard from "../components/excursion/ExcursionCard";

function Excursion() {
  useEffect(() => {
    document.title = "Excursion";
  });
  if (localStorage.getItem("isAdmin") === "true") {
    return (
      <>
        <Navbar active="excursion" />
        <div className="container">
          <img
            src={ExcursionIcon}
            alt="ExcursionIcon"
            className="ExcursionIcon mb-4 mt-4"
          />
          <div className="excursionContainer">
            <ExcursionCard />
            <ExcursionModal />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar active="excursion" />
        <div className="container">
          <img
            src={ExcursionIcon}
            alt="ExcursionIcon"
            className="ExcursionIcon mb-4"
          />
          <div className="excursionContainer">
            <ExcursionCard />
          </div>
        </div>
      </>
    );
  }
}
export default Excursion;
