import { useEffect } from "react";
import ExcursionIcon from "../img/excursion.png";
import "./Excursion.css";
import Navbar from "../components/Navb";

function Excursion() {
  useEffect(() => {
    document.title = "Excursion";
  });
  return (
    <>
      <Navbar active="excursion" />
      <div className="container">
        <img
          src={ExcursionIcon}
          alt="ExcursionIcon"
          className="ExcursionIcon mb-4 mt-4"
        />
        <div className="card">
          <div className="card-body">
            <h3 className="card-title mb-5">Ajouter une excursion</h3>
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
            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Age"
                aria-label="Age"
                aria-describedby="basic-addon1"
              />
            </div>

            <label className="mb-1"> Type de chambre :</label>
            <div className="input-group mb-5">
              <input
                type="text"
                className="form-control"
                placeholder="Type de chambre"
                aria-label="Chambre"
                aria-describedby="basic-addon1"
              />
            </div>

            <button
              type="button"
              className="btn btn-primary btn-lg addExcursionButton"
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Excursion;
