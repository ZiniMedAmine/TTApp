import "./Modall.css";
function Modal(props) {
    return <div className="modall"> 
    <button type="button" class="btn btn-primary modalbtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Gérer les comptes
    </button>
    
    
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Les comptes des utilisateurs</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body ">
            xDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success">Understood</button>
          </div>
        </div>
      </div>
    </div>
    </div>}
export default Modal;