import React, { Fragment, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import { TextSelect } from "../../../../../components/TextSelect";
import { getAddressThai } from "../../../../../service/Address.Service";
import { baseURL } from "../../../../../helper/Axios";
// import Schema from '../../treatmentType/form/Validation';
import { DropzoneImage } from "../../../../../components/DropzoneImage";
import axios from "axios";
import '../../../../../style/formHospital.css';

function FormHospital() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [searchAddress, setSearchAddress] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [address, setAddress] = useState([]);
  const [detail, setDetail] = useState(null);
  const [hospital_logo, setHospital_Logo] = useState("");
  const [hospital_name, setHospital_Name] = useState("");
  const [hospital_phone_number, setHospital_Phone_Number] = useState("");
  const [hospital_No, setHospital_No] = useState("");
  const [hospital_Moo, setHospital_Moo] = useState("");
  const [hospital_latitude, setHospital_Latitude] = useState("");
  const [hospital_logitude, setHospital_Logtitude] = useState("");
  const [hospital_subdistrict, setHospital_Subdistrict] = useState("");
  const [hospital_district, setHospital_District] = useState("");
  const [hospital_province, setHospital_Province] = useState("");
  const [hospital_zipcode, setHospital_Zipcode] = useState("");
  const { FId } = useParams();

  useEffect(() => {
    axios
      .get("https://json-six-lac.vercel.app/hospital/" + FId)
      .then((res) => {
        console.log(res.data);
        setId(res.data.id);
        setHospital_Logo(res.data.hospital_logo);
        setHospital_Name(res.data.hospital_name);
        setHospital_Phone_Number(res.data.hospital_phone_number);
        setHospital_No(res.data.hospital_No);
        setHospital_Moo(res.data.hospital_Moo);
        setHospital_Latitude(res.data.hospital_latitude);
        setHospital_Logtitude(res.data.hospital_logitude);
        setHospital_Subdistrict(res.data.hospital_subdistrict);
        setHospital_District(res.data.hospital_district);
        setHospital_Province(res.data.hospital_province);
        setHospital_Zipcode(res.data.hospital_zipcode);
        setAddress(res.data.address);
        setFullAddress(res.data.fullAddress);
        setSearchAddress(res.data.searchAddress);
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("https://json-six-lac.vercel.app/hospital/" + FId, {
        hospital_logo,
        hospital_name,
        hospital_phone_number,
        hospital_No,
        hospital_Moo,
        hospital_latitude,
        hospital_logitude,
        hospital_subdistrict,
        hospital_district,
        hospital_province,
        hospital_zipcode,
      })
      .then((res) => {
        alert("save Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (searchAddress) {
      getAddressList(searchAddress);
    }
  }, [searchAddress]);

  function getAddressList(search) {
    let res = getAddressThai(search);
    if (res) {
      setAddress(res);
    }
  }

  return (
    <Fragment>
      <div className="w-full">
        <div className="d-flex justify-content-center">
          <h2 className="title-content">ข้อมูลทั่วไปโรงพยาบาล</h2>
        </div>
        <Formik
          enableReinitialize={true}
          initialValues={{
            image: detail
              ? detail.path_image
                ? [`${baseURL}${detail.path_image}`]
                : []
              : [],
            hospital_name: "",
            hospital_logo: "",
            hospital_phone_number: "",
            hospital_No: "",
            hospital_Moo: "",
            hospital_latitude: "",
            hospital_logitude: "",
            hospital_subdistrict: "",
            hospital_district: "",
            hospital_province: "",
            hospital_zipcode: "",
            address: "",
            fullAddress: "",
            subdistrictsId: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ values, errors, touched, setFieldValue, handleSubmit }) => (
            <Form>
              
              <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-8 col-lg-6" onSubmit={handleSubmit}>
                  <div className="row d-flex justify-content-center">
                    <div className="col-6 px-1 mt-2">
                      <label>โลโก้</label>
                      <label className="red">*</label>
                      <br></br>
                      <img className="img-hpt" src={hospital_logo}/>
                      <ErrorMessage
                        component="div"
                        name="hospital_name"
                        className="text-invalid"
                      />
                    </div>

                    <div className="col-6 col-sm-4 col-lg-7 col-xl-5 px-1 mt-2">
                      <DropzoneImage
                        title="อัพโหลดรูป"
                        errors={errors.image}
                        touched={touched.image}
                        name="image"
                        value={values.image}
                        onChange={(e) => {
                          e.preventDefault();
                          let addimg = [];
                          addimg.push(...e.target.files);
                          setFieldValue("image", addimg);
                        }}
                      />
                    </div>
                    <div className="col-12 px-1 mt-2">
                      <label>ชื่อโรงพยาบาล</label>
                      <label className="red">*</label>
                      <input
                        name="id"
                        type="text"
                        value={hospital_name}
                        className={`form-input ${
                          touched.hospital_name
                            ? errors.hospital_name
                              ? "invalid"
                              : "valid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setHospital_Name("hospital_name", e.target.value);
                        }}
                      />
                      <ErrorMessage
                        component="div"
                        name="hospital_name"
                        className="text-invalid"
                      />
                    </div>
                  
                    <div className="col-6 px-1 mt-2">
                      <label>เลขที่</label>
                      <label className="red">*</label>
                      <input
                        name=" hospital_No"
                        type="text"
                        value={hospital_No}
                        className={`form-input ${
                          touched.hospital_No
                            ? errors.hospital_No
                              ? "invalid"
                              : "valid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setHospital_No(" hospital_No", e.target.value);
                        }}
                      />
                      <ErrorMessage
                        component="div"
                        name=" hospital_No"
                        className="text-invalid"
                      />
                    </div>
                    <div className="col-6 px-1 mt-2">
                      <label>หมู่</label>
                      <label className="red">*</label>
                      <input
                        name=" hospital_Moo"
                        type="text"
                        value={hospital_Moo}
                        className={`form-input ${
                          touched.hospital_Moo
                            ? errors.hospital_Moo
                              ? "invalid"
                              : "valid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setHospital_Moo(" hospital_Moo", e.target.value);
                        }}
                      />
                      <ErrorMessage
                        component="div"
                        name="address"
                        className="text-invalid"
                      />
                    </div>
                    <div className="col-3 px-1 mt-2">
                      <label>ตำบล</label>
                      <label className="red">*</label>
                      <input
                        name="hospital_subdistrict"
                        type="text"
                        value={hospital_subdistrict}
                        className={`form-input ${
                          touched.hospital_subdistrict
                            ? errors.hospital_subdistrict
                              ? "invalid"
                              : "valid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setHospital_Subdistrict(" hospital_subdistrict", e.target.value);
                        }}
                      />
                      <ErrorMessage
                        component="div"
                        name="address"
                        className="text-invalid"
                      />
                    </div>
                    <div className="col-3 px-1 mt-2">
                      <label>อำเภอ</label>
                      <label className="red">*</label>
                      <input
                        name="hospital_district"
                        type="text"
                        value={hospital_district}
                        className={`form-input ${
                          touched.hospital_district
                            ? errors.hospital_district
                              ? "invalid"
                              : "valid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setHospital_District(" hospital_district", e.target.value);
                        }}
                      />
                      <ErrorMessage
                        component="div"
                        name="address"
                        className="text-invalid"
                      />
                    </div>
                    <div className="col-3 px-1 mt-2">
                      <label>จังหวัด</label>
                      <label className="red">*</label>
                      <input
                        name="hospital_province"
                        type="text"
                        value={hospital_province}
                        className={`form-input ${
                          touched.hospital_province
                            ? errors.hospital_province
                              ? "invalid"
                              : "valid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setHospital_Province(" hospital_province", e.target.value);
                        }}
                      />
                      <ErrorMessage
                        component="div"
                        name="address"
                        className="text-invalid"
                      />
                    </div>
                    <div className="col-3 px-1 mt-2">
                      <label>รหัสไปรษณีย์</label>
                      <label className="red">*</label>
                      <input
                        name="hospital_zipcode"
                        type="text"
                        value={hospital_zipcode}
                        className={`form-input ${
                          touched.hospital_zipcode
                            ? errors.hospital_zipcode
                              ? "invalid"
                              : "valid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setHospital_Zipcode(" hospital_zipcode", e.target.value);
                        }}
                      />
                      <ErrorMessage
                        component="div"
                        name="address"
                        className="text-invalid"
                      />
                    </div><div className="col-4 px-1 mt-2">
                      <label>ลติจูด</label>
                      <label className="red">*</label>
                      <input
                        name=" hospital_latitude"
                        type="text"
                        value={hospital_latitude}
                        className={`form-input ${
                          touched.hospital_latitude
                            ? errors.hospital_latitude
                              ? "invalid"
                              : "valid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setHospital_Latitude(" hospital_latitude", e.target.value);
                        }}
                      />
                      <ErrorMessage
                        component="div"
                        name="hospital_latitude"
                        className="text-invalid"
                      />
                    </div>
                    <div className="col-4 px-1 mt-2">
                      <label>ลองจิจูด</label>
                      <label className="red">*</label>
                      <input
                        name=" hospital_logitude"
                        type="text"
                        value={hospital_logitude}
                        className={`form-input ${
                          touched.hospital_logitude
                            ? errors.hospital_logitude
                              ? "invalid"
                              : "valid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setHospital_Logtitude(" hospital_logitude", e.target.value);
                        }}
                      />
                      <ErrorMessage
                        component="div"
                        name=" hospital_logitude"
                        className="text-invalid"
                      />
                    </div>
                    <div className="col-4 px-1 mt-2">
                      <label>เบอร์โทร</label>
                      <label className="red">*</label>
                      <input
                        name="hospital_phone_number"
                        type="text"
                        value={hospital_phone_number}
                        className={`form-input ${
                          touched.hospital_phone_number
                            ? errors.hospital_phone_number
                              ? "invalid"
                              : "valid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setHospital_Phone_Number(
                            "hospital_phone_number",
                            e.target.value
                          );
                        }}
                      />
                      <ErrorMessage
                        component="div"
                        name="hospital_phone_number"
                        className="text-invalid"
                      />
                    </div>
                    </div>
                  <div className="d-flex justify-content-center mt-3">
                    <button type="submit" className="btn btn-primary mx-1">
                      บันทึก
                    </button>
                    <button type="reset" className="btn btn-secondary mx-1">
                      ล้างค่า
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  );
}

export default FormHospital;
