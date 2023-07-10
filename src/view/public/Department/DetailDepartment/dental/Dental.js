import React, { useRef, useState, useEffect, Fragment } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../../../../style/dental.css";
import { Row } from "react-bootstrap";

function Dental() {
  const [id, setId] = useState([]);
  const [id_card, setId_Card] = useState([]);
  const [doctor_first_name, setDoctor_Frist_Name] = useState([]);
  const [doctor_last_name, setDoctor_Last_Name] = useState([]);
  const [doctor_image, setDoctor_Image] = useState([]);
  const [doctor_status, setDoctor_Status] = useState([]);
  const [doctor_phonenumber, setDoctor_Phonenumber] = useState([]);
  const [department_name, setDepartment_Name] = useState([]);
  const [Dentals, setDentals] = useState(null);
  const [department_weekday_open, setDepartment_Weekday_Open] = useState([]);
  const [department_weekend_open, setDepartment_Weekend_Open] = useState([]);
  const [department_weekday_close, setDepartment_Weekday_Close] = useState([]);
  const [department_weekend_close, setDepartment_Weekend_Close] = useState([]);
  const [department_floor, setDepartment_Floor] = useState([]);
  const [department_building, setDepartment_Building] = useState([]);
  const { DId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await axios.get(
          `https://json-six-lac.vercel.app/doctor/${DId}`
        );
        const res2 = await axios.get(
          `https://json-six-lac.vercel.app/department/${DId}`
        );

        console.log(res1);
        console.log(res2);

        setId(res1.data.id);

        setDoctor_Frist_Name(res1.data.doctor_first_name);
        setDoctor_Last_Name(res1.data.doctor_last_name);
        setDoctor_Image(res1.data.doctor_image);
        setDoctor_Status(res1.data.doctor_status);
        setDoctor_Phonenumber(res1.data.doctor_phonenumber);
        setDepartment_Name(res1.data.department_name);
        setDentals(res1.data);

        setDepartment_Weekday_Open(res2.data.weekday_open_time);
        setDepartment_Weekend_Open(res2.data.weekend_open_time);
        setDepartment_Weekday_Close(res2.data.weekday_close_time);
        setDepartment_Weekend_Close(res2.data.weekend_close_time);
        setDepartment_Floor(res2.data.floor);
        setDepartment_Building(res2.data.building);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="w-full">
      <div className=" departmentname">
        <h1 className="title-content">แผนก{department_name}</h1>
      </div>
      <div className="doctorindepartment">
        <div className="wrapper-page">
          <div className="centerdoctor">แพทย์ประจำศูนย์</div>
          <div className="doctor-in-depart-card-container">
            <div className="card-doctor">
              <img src={doctor_image} className="doc-img " alt="" />
              <div>
                <b class="text-primary">
                  นพ.{doctor_first_name} {doctor_last_name}
                </b>
                <br />
                สถานะ : {doctor_status}
                <br />
                เบอร์ติดต่อ : {doctor_phonenumber}
              </div>
            </div>
          </div>{" "}
          <div className="depart-detail">
            <div className="depart-detail-title">
              {" "}
              เวลาเปิดทำการจันทร์-ศุกร์{" "}
            </div>
            <h3>
              {" "}
              {department_weekday_open} - {department_weekday_close}
            </h3>{" "}
            <div className="depart-detail-title">
              เวลาเปิดทำการเสาร์-อาทิตย์ และวันหยุดนักขัตฤกษ์{" "}
            </div>
            <h3>
              {department_weekend_open} - {department_weekday_close}
            </h3>
            <div className="depart-detail-title">สถานที่ตั้ง</div>
            <h3>
              อาคาร {department_building} &nbsp; ชั้น {department_floor}{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dental;