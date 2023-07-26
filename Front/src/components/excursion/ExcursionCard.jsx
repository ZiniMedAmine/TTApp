import "./ExcursionCard.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function ExcursionCard() {
  const [matricule, setMatricule] = useState("");
  const [nom, setNom] = useState("");
  const [age, setAge] = useState("");
  const [chambreType, setChambreType] = useState("");

  function addExcursion() {
    axios
      .put("http://localhost:3001/excursion/", {
        matricule: matricule,
        nom: nom,
        age: age,
        typeChambre: chambreType,
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
          title: "Excursion created successfully",
        });
      });
  }

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title mb-5">Ajouter une excursion</h3>
        <label className="mb-1"> Matricule :</label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={matricule}
            onChange={(event) => {
              setMatricule(event.target.value);
            }}
            placeholder="Matricule"
            aria-label="Matricule"
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
        <label className="mb-1"> Age :</label>
        <div className="input-group mb-3">
          <input
            type="number"
            value={age}
            onChange={(event) => {
              setAge(event.target.value);
            }}
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
            value={chambreType}
            onChange={(event) => {
              setChambreType(event.target.value);
            }}
            className="form-control"
            placeholder="Type de chambre"
            aria-label="Chambre"
            aria-describedby="basic-addon1"
          />
        </div>

        <button
          type="button"
          className="btn btn-primary btn-lg addExcursionButton"
          onClick={addExcursion}
        >
          Ajouter
        </button>
      </div>
    </div>
  );
}

export default ExcursionCard;
