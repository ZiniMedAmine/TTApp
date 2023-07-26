import "./SportCard.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function SportCard() {
  const [matricule, setMatricule] = useState("");
  const [nom, setNom] = useState("");
  const [etat, setEtat] = useState("");
  const [typeSport, settypeSport] = useState("");

  function addSport() {
    axios
      .put("http://localhost:3001/sport/", {
        matricule: matricule,
        nom: nom,
        etat: etat,
        typeSport: typeSport,
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
          title: "Sport created successfully",
        });
      });
  }

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title mb-5">Ajouter un sport</h3>
        <label className="mb-1"> Matricule :</label>
        <div className="input-group mb-3">
          <input
            type="text"
            value={matricule}
            onChange={(event) => {
              setMatricule(event.target.value);
            }}
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
            value={nom}
            onChange={(event) => {
              setNom(event.target.value);
            }}
            className="form-control"
            placeholder="Nom & Prenom"
            aria-label="name"
            aria-describedby="basic-addon1"
          />
        </div>
        <label className="mb-1"> état :</label>
        <select
          className="form-select mb-3"
          aria-label="état"
          placeholder="état"
          value={etat}
          onChange={(event) => {
            setEtat(event.target.value);
          }}
        >
          <option value="0" selected>
            Choisir l'état
          </option>
          <option value="agent">Agent</option>
          <option value="enfant">Enfant</option>
        </select>
        <label className="mb-1">Type de sport :</label>
        <select
          className="form-select mb-5"
          aria-label="sport"
          value={typeSport}
          onChange={(event) => {
            settypeSport(event.target.value);
          }}
        >
          <option value="0" selected>
            {" "}
            choisir le type de sport{" "}
          </option>
          <option value="Zumba">Zumba</option>
          <option value="Musculation">Musculation</option>
          <option value="Football">Football</option>
        </select>
        <button
          type="button"
          className="btn btn-primary btn-lg addSportButton"
          onClick={addSport}
        >
          Ajouter
        </button>
      </div>
    </div>
  );
}
export default SportCard;
