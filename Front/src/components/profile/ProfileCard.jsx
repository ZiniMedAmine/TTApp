import "./ProfileCard.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

const MySwal = withReactContent(Swal);

function ProfileCard() {
  const [matricule, setMatricule] = useState("");
  const [tel, setTel] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nom = localStorage.getItem("nom");
  const userId = localStorage.getItem("id");

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:3001/users/${userId}`)
        .then((response) => {
          const userData = response.data;
          setMatricule(userData.matricule);
          setTel(userData.tel);
          setAdress(userData.adresse);
          setEmail(userData.email);
          setPassword(userData.password);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });

  function changeUserData() {
    axios
      .patch("http://localhost:3001/users/" + userId, {
        tel: tel,
        adresse: adress,
        email: email,
        password: password,
      })
      .then(() => {
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
          title: "User updated successfully",
        });
      });
  }

  return (
    <div>
      <div className="card mb-5">
        <div className="card-body">
          <h3 className="card-title mb-5">{nom}</h3>
          <label className="mb-1"> Matricule :</label>
          <div className="input-group mb-3">
            <input
              disabled
              value={matricule}
              type="text"
              className="form-control"
              placeholder="Matricule"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <label className="mb-1"> Tel :</label>
          <div className="input-group mb-3">
            <input
              onChange={(event) => {
                setTel(event.target.value);
              }}
              type="number"
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
            onClick={changeUserData}
          >
            Modifier
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
