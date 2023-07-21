import { useEffect } from "react";
import sportIcon from "../img/sport.png";
import "./Sport.css";
import Navbar from "../components/Navb";

function Sport() {
  useEffect(() => {
    document.title = "Sport";
  });
  return (
    <>
      <Navbar active="sport" />
      <div className="container">
        <img src={sportIcon} alt="sportIcon" className="sportIcon mb-4 mt-4" />
        <div className="card">
          <div className="card-body">
            <h3 className="card-title mb-5">Ajouter un sport</h3>
            <label className="mb-1"> Matricule :</label>
            <div className="input-group mb-3">
              <input
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
                className="form-control"
                placeholder="Nom & Prenom"
                aria-label="name"
                aria-describedby="basic-addon1"
              />
            </div>
            <label className="mb-1"> Age :</label>
            <select className="form-select mb-3" aria-label="age" placeholder="Age">
              <option value="0" selected>Choisir l'age</option>
              <option value="1">Agent</option>
              <option value="2">Enfant</option>
            </select>
            <label className="mb-1">Type de sport :</label>
            <select className="form-select mb-5" aria-label="sport">
              <option value="0" selected> choisir le type de sport </option>
              <option value="1">
                Zumba
              </option>
              <option value="2">Musculation</option>
              <option value="3">Football</option>
            </select>
            <button
              type="button"
              className="btn btn-primary btn-lg addSportButton"
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sport;
