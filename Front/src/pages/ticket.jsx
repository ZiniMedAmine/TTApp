import { useEffect } from "react";
import ticketIcon from "../img/ticket.png";
import "./ticket.css";
import Navbar from "../components/Navb";

function Ticket() {
  useEffect(() => {
    document.title = "Ticket";
  });
  return (
    <>
      <Navbar active="ticket" />
      <div className="container">
        <img
          src={ticketIcon}
          alt="ticketIcon"
          className="ticketIcon mb-4 mt-4"
        />
        <div className="card">
          <div className="card-body">
            <h3 className="card-title mb-5">Ajouter une ticket</h3>
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
            <label className="mb-1"> Nombre de tickets :</label>
            <div className="input-group mb-3">
              <input
                type="text"
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
                  name="type"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  Subventionnée
                </label>
              </div>
              <div class="form-check col">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  id="flexRadioDefault2"
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
                />
                <label className="form-check-label" for="flexRadioDefault4">
                  Sandwitch
                </label>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-lg addTicketButton"
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Ticket;
