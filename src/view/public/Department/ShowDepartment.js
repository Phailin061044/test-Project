import React, { useRef, useState, useEffect } from "react";
import { TextSelect } from "../../../components/TextSelect";
import PageSize from "../../../data/pageSize.json";
import Pagination from "react-js-pagination";
import DateTh from "../../../components/DateTh";
import StatusBook from "../../../data/statusBook.json";
// import { useReactToPrint } from 'react-to-print';
import { Link } from "react-router-dom";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function ShowDepartment({
  data,
  pagin,
  changePage,
  changePageSize,
  updateStatusBook,
  deleteData,
}) {
  const [dataQ, setDataQ] = useState(null);
  const [empData, setEmpData] = useState(null);
  const componentRef = useRef();
  const navigate = useNavigate();

  const pageStyle = `
  @page {
    size: 4in 4in 
    
  }`;

  useEffect(() => {
    axios
      .get("https://json-six-lac.vercel.app/department")
      .then((res) => {
        //console.log(res);
        setEmpData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    if (dataQ) {
      //   print();
    }
  }, [dataQ]);

  const loadDetail = (id) => {
    navigate("/detaildental/" + id);
  };

  return (
    <div className="w-full">
      <div className="d-flex justify-content-between mb-2">
        <div className="col-md-6 col-lg-6">
          {empData &&
            empData.map((item) => {
              return (
                <tr key={item.id}>
                   <Link to={`/detaildental/${item.id}`}>{item.department_name}</Link>

                  
                </tr>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ShowDepartment;
