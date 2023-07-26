import "./TicketModal.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function TicketModal(props) {
  const [data, setData] = useState([]);

  function deleteTicket(id) {
    axios
      .delete(`http://localhost:3001/ticket/${id}`)
      .then((response) => {
        const filtredData = data.filter((ticket) => ticket._id !== id);
        setData(filtredData);
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
          title: "Ticket deleted successfully",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function modifyTicket(ticket) {
    ticket.nom = ticket.nomEdit;
    ticket.nbr_ticket = ticket.nbrEdit;
    ticket.type = ticket.typeEdit;
    ticket.offre = ticket.offrEdit;
    ticket.editMode = false;
    setData(data.slice());

    axios
      .patch(`http://localhost:3001/ticket/${ticket._id}`, {
        nom: ticket.nom,
        nbr_ticket: ticket.nbr_ticket,
        type: ticket.type,
        offre: ticket.offre,
      })
      .then((response) => {
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
          title: "Ticket updated successfully",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3001/ticket/all`)
      .then((response) => {
        const data = response.data;
        for (let i = 0; i < data.length; i++) {
          data[i].editMode = false;
        }
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="modall">
      <button
        type="button"
        class="btn btn-primary modalbtn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Gérer les tickets
      </button>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Les comptes des utilisateurs
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body ">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Matricule</th>
                    <th scope="col"> Nom & Prénom </th>
                    <th scope="col"> Nombre de tickets </th>
                    <th scope="col"> Type de tickets</th>
                    <th scope="col"> Offre</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((ticket) => {
                    if (!ticket.editMode)
                      return (
                        <tr>
                          <td>{ticket.matricule}</td>
                          <td>{ticket.nom}</td>
                          <td>{ticket.nbr_ticket}</td>
                          <td>
                            {ticket.type == "sub"
                              ? "Subventionnée"
                              : "non Subventionnée"}
                          </td>
                          <td>
                            {" "}
                            {ticket.offre == "self" ? "Self" : "Sandwitch"}
                          </td>
                          <td>
                            <div className="tdContainer">
                              <button
                                onClick={() => {
                                  ticket.editMode = true;

                                  ticket.nomEdit = ticket.nom;
                                  ticket.nbrEdit = ticket.nbr_ticket;
                                  ticket.typeEdit = ticket.type;
                                  ticket.offrEdit = ticket.offre;

                                  setData(data.slice());
                                }}
                                className="btn btn-primary btn-sm"
                              >
                                Modifier
                              </button>
                              <button
                                className="btn btn-danger btn-sm ms-2"
                                onClick={() => {
                                  deleteTicket(ticket._id);
                                }}
                              >
                                Supprimer
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    else
                      return (
                        <tr>
                          <td>{ticket.matricule}</td>
                          <td>
                            <input
                              class="form-control form-control-sm"
                              type="text"
                              value={ticket.nomEdit}
                              onChange={(event) => {
                                ticket.nomEdit = event.target.value;
                                setData(data.slice());
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              class="form-control form-control-sm"
                              type="text"
                              value={ticket.nbrEdit}
                              onChange={(event) => {
                                ticket.nbrEdit = event.target.value;
                                setData(data.slice());
                              }}
                            ></input>
                          </td>
                          <td>
                            <select
                              value={ticket.typeEdit}
                              onChange={(event) => {
                                ticket.typeEdit = event.target.value;
                                setData(data.slice());
                              }}
                              class="form-select"
                            >
                              <option
                                value="sub"
                                selected={ticket.typeEdit == "sub"}
                              >
                                Subventionnée
                              </option>
                              <option
                                selected={ticket.typeEdit == "nsub"}
                                value="nsub"
                              >
                                non Subventionnée
                              </option>
                            </select>
                          </td>
                          <td>
                            <select
                              value={ticket.offrEdit}
                              onChange={(event) => {
                                ticket.offrEdit = event.target.value;
                                setData(data.slice());
                              }}
                              class="form-select"
                            >
                              <option
                                value="self"
                                selected={ticket.offrEdit == "self"}
                              >
                                Self
                              </option>
                              <option
                                selected={ticket.offrEdit == "sand"}
                                value="sand"
                              >
                                Sandwitch
                              </option>
                            </select>
                          </td>
                          <td>
                            <div className="tdContainer">
                              <button
                                onClick={() => {
                                  modifyTicket(ticket);
                                }}
                                className="btn btn-success btn-sm"
                              >
                                enregistrer
                              </button>
                              <button
                                className="btn btn-secondary btn-sm ms-2"
                                onClick={() => {
                                  ticket.editMode = false;
                                  setData(data.slice());
                                }}
                              >
                                Annuler
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                  })}
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TicketModal;
