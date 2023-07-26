import "./ExcursionModal.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function ExcursionModal() {
  const [data, setData] = useState([]);

  function deleteExcursion(id) {
    axios
      .delete(`http://localhost:3001/excursion/${id}`)
      .then((response) => {
        const filtredData = data.filter((excursion) => excursion._id !== id);
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
          title: "Excursion deleted successfully",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function modifyExcursion(excursion) {
    excursion.nom = excursion.nomEdit;
    excursion.age = excursion.ageEdit;
    excursion.typeChambre = excursion.typeEdit;

    excursion.editMode = false;
    setData(data.slice());

    axios
      .patch(`http://localhost:3001/excursion/${excursion._id}`, {
        nom: excursion.nom,
        age: excursion.age,
        typeChambre: excursion.typeEdit,
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
          title: "excursion updated successfully",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3001/excursion/all`)
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
        Gérer les excursions
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
                    <th scope="col"> age </th>
                    <th scope="col"> Type de chambre</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((excursion) => {
                    if (!excursion.editMode)
                      return (
                        <tr>
                          <td>{excursion.matricule}</td>
                          <td>{excursion.nom}</td>
                          <td>{excursion.age}</td>
                          <td>{excursion.typeChambre}</td>
                          <td>
                            <div className="tdContainer">
                              <button
                                onClick={() => {
                                  excursion.editMode = true;

                                  excursion.nomEdit = excursion.nom;
                                  excursion.ageEdit = excursion.age;
                                  excursion.typeEdit = excursion.typeChambre;

                                  setData(data.slice());
                                }}
                                className="btn btn-primary btn-sm"
                              >
                                Modifier
                              </button>
                              <button
                                className="btn btn-danger btn-sm ms-2"
                                onClick={() => {
                                  deleteExcursion(excursion._id);
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
                          <td>{excursion.matricule}</td>
                          <td>
                            <input
                              class="form-control form-control-sm"
                              type="text"
                              value={excursion.nomEdit}
                              onChange={(event) => {
                                excursion.nomEdit = event.target.value;
                                setData(data.slice());
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              class="form-control form-control-sm"
                              type="number"
                              value={excursion.ageEdit}
                              onChange={(event) => {
                                excursion.ageEdit = event.target.value;
                                setData(data.slice());
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              class="form-control form-control-sm"
                              type="text"
                              value={excursion.typeEdit}
                              onChange={(event) => {
                                excursion.typeEdit = event.target.value;
                                setData(data.slice());
                              }}
                            ></input>
                          </td>
                          <td>
                            <div className="tdContainer">
                              <button
                                onClick={() => {
                                  modifyExcursion(excursion);
                                }}
                                className="btn btn-success btn-sm"
                              >
                                enregistrer
                              </button>
                              <button
                                className="btn btn-secondary btn-sm ms-2"
                                onClick={() => {
                                  excursion.editMode = false;
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
export default ExcursionModal;
