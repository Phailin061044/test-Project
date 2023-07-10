import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../../../../style/information.css";
import hospitalData from "../../../../../data/hospitalData.json"



  // const navigate = useNavigate();
  // const [id, setId] = useState("");
  // const [hospitalData, setHospitalData] = useState(null);
  // const [address, setAddress] = useState([]);
  // const [hospital_logo, setHospital_Logo] = useState("");
  // const [hospital_name, setHospital_Name] = useState("");
  // const [hospital_phone_number, setHospital_Phone_Number] = useState("");
  // const [hospital_no, setHospital_No] = useState("");
  // const [hospital_moo, setHospital_Moo] = useState("");
  // const [hospital_latitude, setHospital_Latitude] = useState("");
  // const [hospital_logitude, setHospital_Logtitude] = useState("");
  // const [hospital_subdistrict, setHospital_Subdistrict] = useState("");
  // const [hospital_district, setHospital_District] = useState("");
  // const [hospital_province, setHospital_Province] = useState("");
  // const [hospital_zipcode, setHospital_Zipcode] = useState("");
  // const { Id } = useParams();

  // useEffect(() => {
  //   axios
  //     .get("https://json-six-lac.vercel.app/hospital/")
  //     .then((res) => {
  //       console.log(res.data);
  //       setHospitalData(res.data[null]);
  //       setId(res.data.id);
  //       setHospital_Logo(res.data.hospital_logo);
  //       setHospital_Name(res.data.hospital_name);
  //       setHospital_Phone_Number(res.data.hospital_phone_number);
  //       setHospital_No(res.data.hospital_no);
  //       setHospital_Moo(res.data.hospital_moo);
  //       setHospital_Latitude(res.data.hospital_latitude);
  //       setHospital_Logtitude(res.data.hospital_logitude);
  //       setHospital_Subdistrict(res.data.hospital_subdistrict);
  //       setHospital_District(res.data.hospital_district);
  //       setHospital_Province(res.data.hospital_province);
  //       setHospital_Zipcode(res.data.hospital_zipcode);
  //       setAddress(res.data.address);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
function MainHospital() {
return(
  <div className="w-full">
        <div className="d-flex justify-content-center ">
          <h2 className="title-content">ข้อมูลทั่วไปของระบบ</h2>
        </div>
      
        {hospitalData.map((news)=>{
          return (
          <from className="container11">
                <div className="col-6 px-1 mt-2">
                  <div className="form-group-h">
                  <b><img className="img-ht" src={news.hospital_logo} /></b>
                  </div>
                </div>
                <p></p>
                <div className="col-12 px-1 mt-2">
                  <div className="form-group-h">
                    <p>
                      <h5>
                      <b>{news.hospital_name}</b>
                      </h5>
                    </p>
                  </div>
                </div>
                <div className="col-6 px-1 mt-2">
                  <div className="form-group-h">
                    <p>
                      <b>เลขที่ :</b>
                      {news.hospital_No}
                    </p>
                  </div>
                </div>
                <div className="col-6 px-1 mt-2">
                  <div className="form-group-h">
                    <p>
                      <b>หมู่ : </b> 
                      {news.hospital_Moo}
                    </p>
                  </div>
                </div>
                
                <div className="col-6 px-1 mt-2">
                  <div className="form-group-h">
                    <p>
                      <b>อำเภอ : </b>
                      {news.hospital_subdistrict}
                    </p>
                  </div>
                </div>
                <div className="col-6 px-1 mt-2">
                  <div className="form-group-h">
                    <p>
                      <b>ตำบล : </b>
                      {news.hospital_district}
                    </p>
                  </div>
                </div>
                <div className="col-6 px-1 mt-2">
                  <div className="form-group-h">
                    <p>
                      <b>จังหวัด : </b>
                      {news.hospital_province}
                    </p>
                  </div>
                </div>
                <div className="col-6 px-1 mt-2">
                  <div className="form-group-h">
                    <p>
                      <b>รหัสไปรษณีย์ : </b>
                      {news.hospital_zipcode}
                    </p>
                  </div>
                </div>
                <div className="col-12 px-1 mt-2">
                  <div className="form-group-h">
                    <p>
                      <b>เบอร์ติดต่อ : </b>
                      {news.hospital_phone_number}
                    </p>
                  </div>
                </div><div className="col-6 px-1 mt-2">
                  <div className="form-group-h">
                    <p>
                      <b>ลติจูด : </b>
                      {news.hospital_latitude}
                    </p>
                  </div>
                </div>
                <div className="col-6 px-1 mt-2">
                  <div className="form-group-h">
                    <p>
                      <b>ลองจิจูด : </b>
                      {news.hospital_logitude}
                    </p>
                  </div>
                </div>
                
                <div className="d-flex justify-content-center mt-3">
                <Link to="/admin/hospital/form" className="btn btn-warning mx-1">
                        แก้ไข
                        </Link>
                      <Link to="/" className="btn btn-primary mx-1">
                       หน้าหลัก
                       </Link>
                    </div>
              </from>
          )
        })}
      </div>
  
)
}
export default MainHospital;
