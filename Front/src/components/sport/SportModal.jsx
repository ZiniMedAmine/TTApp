import "./SportModal.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function SportModal() {
  const [data, setData] = useState([]);

  function deleteSport(id) {
    axios
      .delete(`http://localhost:3001/sport/${id}`)
      .then((response) => {
        const filtredData = data.filter((sport) => sport._id !== id);
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
          title: "Sport deleted successfully",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function modifySport(sport) {
    sport.nom = sport.nomEdit;
    sport.etat = sport.etatEdit;
    sport.typeSport = sport.typeEdit;

    sport.editMode = false;
    setData(data.slice());

    axios
      .patch(`http://localhost:3001/sport/${sport._id}`, {
        nom: sport.nom,
        etat: sport.etat,
        typeSport: sport.typeSport,
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
          title: "Sport updated successfully",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3001/sport/all`)
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
    <div className="modall mt-4">
      <button
        type="button"
        class="btn btn-primary modalbtn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Gérer les sports
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
                    <th scope="col"> etat </th>
                    <th scope="col"> Type de sport</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((sport) => {
                    if (!sport.editMode)
                      return (
                        <tr>
                          <td>{sport.matricule}</td>
                          <td>{sport.nom}</td>
                          <td>{sport.etat}</td>
                          <td>{sport.typeSport}</td>
                          <td>
                            <div className="tdContainer">
                              <button
                                onClick={() => {
                                  sport.editMode = true;

                                  sport.nomEdit = sport.nom;
                                  sport.etatEdit = sport.etat;
                                  sport.typeEdit = sport.typeSport;

                                  setData(data.slice());
                                }}
                                className="btn btn-primary btn-sm"
                              >
                                Modifier
                              </button>
                              <button
                                className="btn btn-danger btn-sm ms-2"
                                onClick={() => {
                                  deleteSport(sport._id);
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
                          <td>{sport.matricule}</td>
                          <td>
                            <input
                              class="form-control form-control-sm"
                              type="text"
                              value={sport.nomEdit}
                              onChange={(event) => {
                                sport.nomEdit = event.target.value;
                                setData(data.slice());
                              }}
                            ></input>
                          </td>
                          <td>
                            <select
                              value={sport.etatEdit}
                              onChange={(event) => {
                                sport.etatEdit = event.target.value;
                                setData(data.slice());
                              }}
                              class="form-select"
                            >
                              <option
                                value="agent"
                                selected={sport.etatEdit == "agent"}
                              >
                                Agent
                              </option>
                              <option
                                selected={sport.etatEdit == "enfant"}
                                value="enfant"
                              >
                                Enfant
                              </option>
                            </select>
                          </td>
                          <td>
                            <select
                              value={sport.typeEdit}
                              onChange={(event) => {
                                sport.typeEdit = event.target.value;
                                setData(data.slice());
                              }}
                              class="form-select"
                            >
                              <option
                                value="Zumba"
                                selected={sport.typeEdit == "Zumba"}
                              >
                                Zumba
                              </option>
                              <option
                                selected={sport.typeEdit == "Musculation"}
                                value="Musculation"
                              >
                                Musculation
                              </option>
                              <option
                                selected={sport.typeEdit == "Football"}
                                value="Football"
                              >
                                Football
                              </option>
                            </select>
                          </td>
                          <td>
                            <div className="tdContainer">
                              <button
                                onClick={() => {
                                  modifySport(sport);
                                }}
                                className="btn btn-success btn-sm"
                              >
                                enregistrer
                              </button>
                              <button
                                className="btn btn-secondary btn-sm ms-2"
                                onClick={() => {
                                  sport.editMode = false;
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
export default SportModal;
