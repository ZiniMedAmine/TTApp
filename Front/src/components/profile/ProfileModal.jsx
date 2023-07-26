import "./ProfileModal.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function ProfileModal(props) {
  const [data, setData] = useState([]);

  function deleteUser(id) {
    axios
      .delete(`http://localhost:3001/users/${id}`)
      .then((response) => {
        const filtredData = data.filter((user) => user._id !== id);
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
          title: "User deleted successfully",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function modifyUser(user) {
    user.nom = user.nomEdit;
    user.tel = user.telEdit;
    user.adresse = user.adrEdit;
    user.email = user.mailEdit;
    user.password = user.passEdit;
    user.editMode = false;
    setData(data.slice());

    axios
      .patch(`http://localhost:3001/users/${user._id}`, {
        nom: user.nom,
        tel: user.tel,
        adresse: user.adresse,
        email: user.email,
        password: user.password,
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
          title: "User updated successfully",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/all`)
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
        Gérer les comptes
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
                    <th scope="col"> Téléphone </th>
                    <th scope="col"> Adresse</th>
                    <th scope="col"> E-mail</th>
                    <th scope="col"> Password </th>
                    <th scope="col"> Action </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((user) => {
                    if (!user.editMode)
                      return (
                        <tr>
                          <td>{user.matricule}</td>
                          <td>{user.nom}</td>
                          <td>{user.tel}</td>
                          <td>{user.adresse}</td>
                          <td>{user.email}</td>
                          <td>{user.password}</td>
                          <td>
                            <div className="tdContainer">
                              <button
                                onClick={() => {
                                  user.editMode = true;

                                  user.adrEdit = user.adresse;
                                  user.mailEdit = user.email;
                                  user.passEdit = user.password;
                                  user.telEdit = user.tel;
                                  user.nomEdit = user.nom;

                                  setData(data.slice());
                                }}
                                className="btn btn-primary btn-sm"
                              >
                                Modifier
                              </button>
                              <button
                                className="btn btn-danger btn-sm ms-2"
                                onClick={() => {
                                  deleteUser(user._id);
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
                          <td>{user.matricule}</td>
                          <td>
                            <input
                              class="form-control form-control-sm"
                              type="text"
                              value={user.nomEdit}
                              onChange={(event) => {
                                user.nomEdit = event.target.value;
                                setData(data.slice());
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              class="form-control form-control-sm"
                              type="text"
                              value={user.telEdit}
                              onChange={(event) => {
                                user.telEdit = event.target.value;
                                setData(data.slice());
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              class="form-control form-control-sm"
                              type="text"
                              value={user.adrEdit}
                              onChange={(event) => {
                                user.adrEdit = event.target.value;
                                setData(data.slice());
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              class="form-control form-control-sm"
                              type="text"
                              value={user.mailEdit}
                              onChange={(event) => {
                                user.mailEdit = event.target.value;
                                setData(data.slice());
                              }}
                            ></input>
                          </td>
                          <td>
                            <input
                              class="form-control form-control-sm"
                              type="text"
                              value={user.passEdit}
                              onChange={(event) => {
                                user.passEdit = event.target.value;
                                setData(data.slice());
                              }}
                            ></input>
                          </td>
                          <td>
                            <div className="tdContainer">
                              <button
                                onClick={() => {
                                  modifyUser(user);
                                }}
                                className="btn btn-success btn-sm"
                              >
                                enregistrer
                              </button>
                              <button
                                className="btn btn-secondary btn-sm ms-2"
                                onClick={() => {
                                  user.editMode = false;
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
export default ProfileModal;
