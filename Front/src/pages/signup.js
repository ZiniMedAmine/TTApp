import "./signup.css";
import logo from "../img/TT.png";
import userIcon from "../img/user.png";
import passIcon from "../img/pass.png";
import adrIcon from "../img/address.png";
import nameIcon from "../img/name.png";
import mailIcon from "../img/mail.png";
import phoneIcon from "../img/phone.png";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [matricule, setMatricule] = useState("");
  const [nom, setNom] = useState("");
  const [tel, setTel] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup() {
    axios.put("http://localhost:3001/users/signup", {
      matricule: matricule,
      nom: nom,
      tel: tel,
      adresse: adress,
      email: email,
      password: password,
    });
  }

  useEffect(() => {
    document.title = "Signup";
  });
  return (
    <div className="App">
      <div className="container signup">
        <img src={logo} alt="Logo" className="logo" />
        <div className="card">
          <div className="card-body">
            <h3 className="card-title mb-5">Sign up</h3>
            <div className="input-group mb-3">
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
                <label htmlFor="matricule">Matricule</label>
              </div>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <img src={nameIcon} alt="nameIcon" className="icon"></img>
              </span>
              <div className="form-floating">
                <input
                  type="text"
                  value={nom}
                  onChange={(event) => {
                    setNom(event.target.value);
                  }}
                  className="form-control"
                  placeholder="Nom et prénom"
                  aria-label="Name"
                  aria-describedby="basic-addon1"
                  id="nom"
                />
                <label htmlFor="nom">Nom et prénom</label>
              </div>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <img src={phoneIcon} alt="telIcon" className="icon"></img>
              </span>
              <div className="form-floating">
                <input
                  type="text"
                  value={tel}
                  onChange={(event) => {
                    setTel(event.target.value);
                  }}
                  className="form-control"
                  placeholder="Tel"
                  aria-label="tel"
                  aria-describedby="basic-addon1"
                  id="tel"
                />
                <label htmlFor="tel">Tel</label>
              </div>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <img src={adrIcon} alt="addressIcon" className="icon"></img>
              </span>
              <div className="form-floating">
                <input
                  type="text"
                  value={adress}
                  onChange={(event) => {
                    setAdress(event.target.value);
                  }}
                  className="form-control"
                  placeholder="Adresse"
                  aria-label="Adress"
                  aria-describedby="basic-addon1"
                  id="adresse"
                />
                <label htmlFor="adresse">Adresse</label>
              </div>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <img src={mailIcon} alt="emailIcon" className="icon"></img>
              </span>
              <div className="form-floating">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  id="email"
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <img src={passIcon} alt="passIcon" className="icon"></img>
              </span>
              <div className="form-floating">
                <input
                  type="password"
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
                <label htmlFor="floatingPassword">Password</label>
              </div>
            </div>
            <div id="login">
              <Link to="/">
                <button
                  type="button"
                  onClick={handleSignup}
                  className="btn btn-primary btn-lg login-btn"
                >
                  Sign up
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
