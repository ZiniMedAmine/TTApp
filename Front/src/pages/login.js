import "./login.css";
import logo from "../img/TT.png";
import userIcon from "../img/user.png";
import passIcon from "../img/pass.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Login() {
  const [matricule, setMatricule] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    axios
      .post("http://localhost:3001/users/login", {
        matricule: matricule,
        password: password,
      })
      .then(({ data }) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("id", data.id);
          localStorage.setItem("nom", data.nom);
          localStorage.setItem("isAdmin", data.isAdmin);
          navigate("/home");
          const Toast = MySwal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });
        }
      })
      .catch(() => {
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: "matricule ou mot de passe invalide",
        });
        setPassword('')
      });
  }

  function handleEnterLogin(e){
    if (e.key === 'Enter') {
      handleLogin() 
    }
  }

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
      <div className="container"  onKeyDown={handleEnterLogin}>
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
                  value={matricule}
                  onChange={(event) => {
                    setMatricule(event.target.value);
                  }}
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
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  id="floatingPassword"
                />
                <label for="floatingPassword">Password</label>
              </div>
            </div>
            <button
              type="button"
              onClick={handleLogin}
              className="btn btn-primary btn-lg login-btn"
            >
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
