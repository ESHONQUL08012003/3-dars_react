import React from "react";
import "./style.scss";
import UserTable from "./UserTable";
function index() {
  return (
    <>
      <div className="content bg-white">
        <div className="content__info pb-3 mb-3 border-0 border-bottom">
          <strong>All tickets</strong>
          <div className="d-flex gap-5">
            <button className="d-flex gap-2 align-atems-center btn btn-outline-dark">
              <i className="fas fa-sort-amount-up"></i>
              sort
            </button>
            <button className=" d-flex gap-2 btn btn-outline-warning">
              <i class="fas fa-filter"></i>
              filter
            </button>
          </div>
        </div>

        <form className="d-flex gap-1">
          <input className="form-control" type="text" id="typeText" placeholder="Enter name"/>
          <input className="form-control" type="text"  placeholder="enter email"/>
          <input className="form-control" type="tel"  placeholder="Enter number"/>
        </form>

        <UserTable />
      </div>
    </>
  );
}

export default index;
