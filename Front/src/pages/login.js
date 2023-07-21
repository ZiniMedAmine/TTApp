import "./login.css";
import logo from "../img/TT.png";
import userIcon from "../img/user.png";
import passIcon from "../img/pass.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  useEffect(() => {
    document.title = "Login";
  });

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "#2b8bda",
    fontSize: "18px",
    fontWeight: "600",
  };

  return (
    <div className="App">
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <div className="card">
          <div className="card-body">
            <h3 className="card-title mb-5">Login</h3>
            <div className="input-group mb-3 ">
              <span className="input-group-text" id="basic-addon1">
                <img src={userIcon} alt="userIcon" className="icon"></img>
              </span>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Matricule"
                  id="matricule"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <label for="matricule">Matricule</label>
              </div>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <img src={passIcon} className="icon" alt="telecom logo"></img>
              </span>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  id="floatingPassword"
                />
                <label for="floatingPassword">Password</label>
              </div>
            </div>
            <button type="button" className="btn btn-primary btn-lg login-btn">
              Login
            </button>
          </div>
          <div id="creer">
            <Link to="/signup" style={linkStyle}>
              {" "}
              Créer un compte
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
