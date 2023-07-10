import React, { useRef, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../../src/style/departmentAll.css";
import {
  faTooth,
  faHeartbeat,
  faChild,
  faPersonPregnant,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ShowDepartmentAll({}) {
  return (
    <div className="w-full">
      <div className="w-full mb-5">
        <h2 className="title-content">แผนกในโรงพยาบาล</h2>
      </div>
      <div class="departmentd">
        <div class="row">
          <div class="col-3">
            <div class="card">
              <div class="card-body">
                <FontAwesomeIcon icon={faTooth} class="fa fa-tooth fa-2x" />
                <h5 class="text-1">
                  {" "}
                  <Link to={"/detaildental/1"}>ทันตกรรม</Link>
                </h5>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card">
              <div class="card-body">
                <FontAwesomeIcon
                  icon={faHeartbeat}
                  class="fafa-heartbeat  fa-2x"
                />
                <h5 class="text-2">
                  {" "}
                  <Link to="/detaildental/2"> หัวใจ </Link>
                </h5>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card">
              <div class="card-body">
                <FontAwesomeIcon icon={faChild} class="fa fa-child fa-2x" />
                <h5 class="text-3">
                  {" "}
                  <Link to="/detaildental/3">กุมารเวชกรรม </Link>
                </h5>
              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="card">
              <div class="card-body">
                <FontAwesomeIcon
                  icon={faPersonPregnant}
                  class="fa fa-person-pregnant fa-2x"
                />
                <h5 class="text-4">
                  {" "}
                  <Link to="/detaildental/4">แผนกสูติ - นรีเวชกรรม </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDepartmentAll;