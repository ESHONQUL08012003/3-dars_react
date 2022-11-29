import React from "react";
import "./table.scss";
import { data } from "./data";

function index(props) {
  return (
    <>
      <div style={{ overflowX: "auto" }}>
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>name</th>
              <th>tel number</th>
              <th>status</th>
              <th>action</th>
            </tr>
          </thead>

          {data.map((user) => {
            return (
              <tbody>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.first_name}</td>
                  <td>+998 97 167 47 48</td>
                  <td>
                    <span
                      className={`py-2 px-3 ${
                        user.online ? "bg-success" : "bg-danger"
                      }  text-white rounded-pill`}
                    >
                      {user.online ? "active" : "sleep"}
                    </span>
                  </td>
                  <td>
                    <div className="d-flex justify-content-center gap-3 ">
                      <button className="btn-edit">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="btn-delet">
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default index;
