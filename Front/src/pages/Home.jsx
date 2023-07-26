import { useEffect } from "react";
import "./Home.css";
import excursion from "../img/excursion.png";
import excursionWhite from "../img/excursionWhite.png";
import sport from "../img/sport.png";
import sportWhite from "../img/sportWhite.png";
import ticket from "../img/ticket.png";
import ticketWhite from "../img/ticketWhite.png";
import user from "../img/user.png";
import userWhite from "../img/userWhite.png";
import HomeCard from "../components//home/HomeCard";
import { Link } from "react-router-dom";
import TTLOGO from "../img/TT.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Home";
  });

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("nom");
    localStorage.removeItem("id");
    localStorage.removeItem("isAdmin");
    navigate("/");
  }

  let profileText = "Profile";
  if (localStorage.getItem("isAdmin") == "true") profileText = "Comptes";

  const cardList = [
    { title: "Ticket", img: ticket, imgWhite: ticketWhite, link: "/ticket" },
    { title: "Sport", img: sport, imgWhite: sportWhite, link: "/sport" },
    {
      title: "Excursion",
      img: excursion,
      imgWhite: excursionWhite,
      link: "/excursion",
    },
    { title: profileText, img: user, imgWhite: userWhite, link: "/profile" },
  ];
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <>
      <h5 onClick={logout} className="me-3 mt-2 logout-btn">
        <img src={user} className="logoutIcon"></img>
        Logout
      </h5>
      <div className="home-container">
        <img src={TTLOGO} alt="tt logo" className="mt-5" width="300" />

        <h3 className="wlc mt-5">Bienvenue {localStorage.getItem("nom")}</h3>

        <div className="row mt-5 ">
          {cardList.map((item) => (
            <div className="col-md-3">
              <Link to={item.link} style={linkStyle}>
                <HomeCard
                  img={item.img}
                  imgWhite={item.imgWhite}
                  title={item.title}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
