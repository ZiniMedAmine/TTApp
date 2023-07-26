import "./Navb.css";
import { Link } from "react-router-dom";
import TTLOGO from "../../img/TT.png";
import { useNavigate } from "react-router-dom";

function Navbar(prop) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("nom");
    localStorage.removeItem("id");
    localStorage.removeItem("isAdmin");
    navigate("/");
  }

  return (
    <div className="nvb">
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img src={TTLOGO} alt="ttlogo" width="75" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={
                    "nav-link " + (prop.active === "ticket" ? "active" : "")
                  }
                  to="/ticket"
                >
                  {" "}
                  Ticket
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className={
                    "nav-link " + (prop.active === "sport" ? "active" : "")
                  }
                  to="/sport"
                >
                  {" "}
                  Sport
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className={
                    "nav-link " + (prop.active === "excursion" ? "active" : "")
                  }
                  to="/excursion"
                >
                  {" "}
                  Excursion
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className={
                    "nav-link " + (prop.active === "profile" ? "active" : "")
                  }
                  to="/profile"
                >
                  {" "}
                  Profile
                </Link>
              </li>
              <li class="nav-item">
                <Link onClick={logout} className={"nav-link "}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
