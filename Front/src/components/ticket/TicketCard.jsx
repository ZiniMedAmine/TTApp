import "./TicketCard.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function TicketCard() {
  const [matricule, setMatricule] = useState("");
  const [nom, setNom] = useState("");
  const [nbTickets, setNbTickets] = useState("");
  const [ticketType, setTicketType] = useState("sub");
  const [offre, setOffre] = useState("self");

  function addTicket() {
    axios
      .put("http://localhost:3001/ticket/", {
        matricule: matricule,
        nom: nom,
        nbr_ticket: nbTickets,
        type: ticketType,
        offre: offre,
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
          title: "Ticket created successfully",
        });
      });
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h3 className="card-title mb-5">Ajouter une ticket</h3>
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
        <label className="mb-1"> Nombre de tickets :</label>
        <div className="input-group mb-3">
          <input
            type="text"
            value={nbTickets}
            onChange={(event) => {
              setNbTickets(event.target.value);
            }}
            className="form-control"
            placeholder="nombre de tickets"
            aria-label="name"
            aria-describedby="basic-addon1"
          />
        </div>
        <label className="mb-1">Type de ticket :</label>
        <div className="row radio-form d-flex ms-5 mb-3 mt-1">
          <div className="form-check col">
            <input
              className="form-check-input"
              type="radio"
              name="type1"
              id="flexRadioDefault1"
              checked={ticketType === "sub"}
              value="sub"
              onChange={(event) => {
                setTicketType(event.currentTarget.value);
              }}
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Subventionnée
            </label>
          </div>
          <div class="form-check col">
            <input
              className="form-check-input"
              type="radio"
              name="type2"
              checked={ticketType === "nsub"}
              id="flexRadioDefault2"
              value="nsub"
              onChange={(event) => {
                setTicketType(event.currentTarget.value);
              }}
            />
            <label className="form-check-label" for="flexRadioDefault2">
              non Subventionnée
            </label>
          </div>
        </div>
        <label className="mb-1">Offre :</label>
        <div className="row radio-form d-flex ms-5 mb-5 mt-1">
          <div className="form-check col">
            <input
              className="form-check-input"
              type="radio"
              name="offre"
              id="flexRadioDefault3"
              checked={offre === "self"}
              value="self"
              onChange={(event) => {
                setOffre(event.currentTarget.value);
              }}
            />
            <label className="form-check-label" for="flexRadioDefault3">
              Self
            </label>
          </div>
          <div class="form-check col">
            <input
              className="form-check-input"
              type="radio"
              name="offre"
              id="flexRadioDefault4"
              checked={offre === "sand"}
              value="sand"
              onChange={(event) => {
                setOffre(event.currentTarget.value);
              }}
            />
            <label className="form-check-label" for="flexRadioDefault4">
              Sandwitch
            </label>
          </div>
        </div>
        <button
          type="button"
          onClick={addTicket}
          className="btn btn-primary btn-lg addTicketButton"
        >
          Ajouter
        </button>
      </div>
    </div>
  );
}
export default TicketCard;
