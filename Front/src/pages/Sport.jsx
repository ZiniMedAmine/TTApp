import { useEffect } from "react";
import sportIcon from "../img/sport.png";
import "./Sport.css";
import Navbar from "../components/navbar/Navb";
import SportModal from "../components/sport/SportModal";
import SportCard from "../components/sport/SportCard";

function Sport() {
  useEffect(() => {
    document.title = "Sport";
  });
  if (localStorage.getItem("isAdmin") === "true") {
    return (
      <>
        <Navbar active="sport" />
        <div className="container">
          <img src={sportIcon} alt="sportIcon" className="sportIcon mb-4" />
          <div className="sportContainer">
            <SportCard />
            <SportModal />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar active="sport" />
        <div className="container">
          <img src={sportIcon} alt="sportIcon" className="sportIcon mb-4" />
          <SportCard />
        </div>
      </>
    );
  }
}
export default Sport;
