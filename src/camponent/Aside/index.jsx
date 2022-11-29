import React from "react";
import { logo } from "../../assets";
import { Overview } from "../../assets";
import {Tickets} from "../../assets";
import {Ideas} from "../../assets"
import {Contacts} from "../../assets"
import {Agents} from "../../assets"
import {Vector} from  "../../assets"
import "./style.scss"
function index() {
  return (
    <>
      <div className="aside">
        <div className="d-flex gap-2 align-items-center logo">
          <img src={logo} alt="" />
          <strong className="logo__title">Dashboard Kit</strong>
        </div>

        <ul className="aside__list">
          <li className="aside__list-item">
            <img src={Overview} alt={"icon"} />
            <strong>Overview</strong>
          </li>

          <li className="aside__list-item">
            <img src={Tickets} alt={"icon"} />
            <strong>Tickets</strong>
          </li>

          <li className="aside__list-item">
            <img src={Ideas} alt={"icon"} />
            <strong>Ideas</strong>
          </li>

          <li className="aside__list-item">
            <img src={Contacts} alt={"icon"} />
            <strong>Contacts</strong>
          </li>

          <li className="aside__list-item">
            <img src={Agents} alt={"icon"} />
            <strong>Agents</strong>
          </li>

           <li className="aside__list-item">
            <img src={Vector} alt={"icon"} />
            <strong>Articles</strong>
          </li>
        </ul>
      </div>
    </>
  );
}

export default index;
