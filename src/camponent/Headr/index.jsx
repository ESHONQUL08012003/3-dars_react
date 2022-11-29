import React from "react";
import "./style.scss";

function index() {
  return (
    <>
      <div className="header">

        <div className="header__info">
          <strong>Tickets</strong>

          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center">
              <input className="form-control py-2" type="text" />
              <button className="btn btn-outline-white">
                <i className="fas fa-search text-black fa-2x"></i>
              </button>
            </div>

            <button className="btn btn-outline-white">
              <i className="fas fa-bell text-black fa-2x"></i>
            </button>

            <div className="d-flex align-items-center gap-2 user">
              <span>Eshonqul</span>
              <button className="btn btn-outline-success">
                <i class="fas fa-user fa-2x"></i>
              </button>
            </div>
          </div>
        </div>

        

      </div>
    </>
  );
}

export default index;
