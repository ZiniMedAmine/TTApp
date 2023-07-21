import Navbar from "../components/Navb";
import { useEffect, useState } from "react";
import UserIcon from "../img/user.png";

import "./profile.css";
function Profile() {
  const [tel, setTel] = useState("1111111");
  const [adress, setAdress] = useState("hammamet");
  const [email, setEmail] = useState("aa@aa.aa");
  const [password, setPassword] = useState("••••••");

  useEffect(() => {
    document.title = "Profile";
  });
  return (
    <>
      <Navbar active="profile" />
      <div className="profile-container ">
        <img src={UserIcon} alt="UserIcon" className="UserIcon  mb-4" />
        <div className="card mb-5">
          <div className="card-body">
            <h3 className="card-title mb-5">Salem cha</h3>
            <label className="mb-1"> Matricule :</label>
            <div className="input-group mb-3">
              <input
                disabled
                value="55555"
                type="text"
                className="form-control"
                placeholder="Matricule"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <label className="mb-1"> Nom & Prénom :</label>
            <div className="input-group mb-3">
              <input
                type="text"
                value="test"
                disabled
                className="form-control"
                placeholder="Nom & Prenom"
                aria-label="name"
                aria-describedby="basic-addon1"
              />
            </div>
            <label className="mb-1"> Tel :</label>
            <div className="input-group mb-3">
              <input
                onChange={(event) => {
                  setTel(event.target.value);
                }}
                value={tel}
                className="form-control"
                placeholder="Tel"
                aria-label="tel"
                aria-describedby="basic-addon1"
              />
            </div>
            <label className="mb-1"> Adress :</label>
            <div className="input-group mb-3">
              <input
                onChange={(event) => {
                  setAdress(event.target.value);
                }}
                value={adress}
                className="form-control"
                placeholder="adress"
                aria-label="adress"
                aria-describedby="basic-addon1"
              />
            </div>
            <label className="mb-1"> Email :</label>
            <div className="input-group mb-3">
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                value={email}
                type="email"
                className="form-control"
                placeholder="email"
                aria-label="email"
                aria-describedby="basic-addon1"
              />
            </div>
            <label className="mb-1"> Password :</label>
            <div className="input-group mb-3">
              <input
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                value={password}
                className="form-control"
                placeholder="Password"
                aria-label="password"
                aria-describedby="basic-addon1"
                type="password"
              />
            </div>
            <button
              type="button"
              className="btn btn-primary btn-lg editProfileButton"
            >
              Modifier
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
