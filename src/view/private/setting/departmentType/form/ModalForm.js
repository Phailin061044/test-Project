import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Formik, Form, ErrorMessage } from 'formik';
import Schema from './Validation';
import { getDetailDepartmentType, createDepartmentType, updateDepartmentType } from '../../../../../service/DepartmentType.Service';
import Swal from 'sweetalert2';
import { DropzoneImage } from '../../../../../components/DropzoneImage';

function ModalForm({ id, show, setShow, reload }) {
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    if (id !== 0) {
      getDetail(id);
    } else {
      setDetail(null);
    }
  }, [id]);

  // ฟังก์ชันดึงข้อมูลตาม id ที่ส่งมา
  async function getDetail(id) {
    let res = await getDetailDepartmentType(id);
    if (res) {
      if (res.statusCode === 200 && res.taskStatus) {
        setDetail(res.data);
      }
    }
  }

  // ฟังก์ชันบันทึกข้อมูล และแก้ไขข้อมูล
  async function save(data) {
    let res = id === 0 ? await createDepartmentType(data) : await updateDepartmentType(id, data);
    if (res) {
      if (res.statusCode === 200 && res.taskStatus) {
        Swal.fire({
          icon: 'success',
          title: 'บันทึกข้อมูลสำเร็จ',
          showConfirmButton: false,
          timer: 1500,
        });
        reload();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'บันทึกข้อมูลไม่สำเร็จ',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  }

  return (
    <Modal show={show} onHide={setShow} centered>
      <Modal.Header closeButton>
        <Modal.Title>{id === 0 ? 'เพิ่มข้อมูล' : 'แก้ไขข้อมูล'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          enableReinitialize={true}
          validationSchema={Schema}
          initialValues={{
            name: detail ? detail.name : '',
          }}
          onSubmit={(value) => {
            console.log('submit :', value);
            save(value);
          }}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <Form>
              <div className="row">
                <div className="col-12">
                  <label>ชื่อแผนก</label>
                  <input
                    value={values.name}
                    name="name"
                    type="text"
                    className={`form-input ${touched.name ? (errors.name ? 'invalid' : 'valid') : ''}`}
                    onChange={(e) => {
                      setFieldValue('name', e.target.value);
                    }}
                  />
                  <ErrorMessage component="div" name="name" className="text-invalid" />
                </div>
                <div className="col-12 col-sm-8 col-lg-7 col-xl-5 px-1 mt-2">
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
                          setFieldValue('image', addimg);
                        }}
                      />
                      </div>
                <div className="col-12">
                  <label>จำนวนคิวที่เปิดรับ</label>
                  <input
                    value={values.name}
                    name="name"
                    type="text"
                    className={`form-input ${touched.name ? (errors.name ? 'invalid' : 'valid') : ''}`}
                    onChange={(e) => {
                      setFieldValue('name', e.target.value);
                    }}
                  />
                  <ErrorMessage component="div" name="name" className="text-invalid" />
                </div>
                <div className="col-6">
                  <label>เวลาเปิด</label>
                  <input
                    value={values.name}
                    name="name"
                    type="text"
                    className={`form-input ${touched.name ? (errors.name ? 'invalid' : 'valid') : ''}`}
                    onChange={(e) => {
                      setFieldValue('name', e.target.value);
                    }}
                  />
                  <ErrorMessage component="div" name="name" className="text-invalid" />
                </div>
                <div className="col-6">
                  <label>เวลาปิด</label>
                  <input
                    value={values.name}
                    name="name"
                    type="text"
                    className={`form-input ${touched.name ? (errors.name ? 'invalid' : 'valid') : ''}`}
                    onChange={(e) => {
                      setFieldValue('name', e.target.value);
                    }}
                  />
                  <ErrorMessage component="div" name="name" className="text-invalid" />
                </div>
                <div className="col-6">
                  <label>ชั้น</label>
                  <input
                    value={values.name}
                    name="name"
                    type="text"
                    className={`form-input ${touched.name ? (errors.name ? 'invalid' : 'valid') : ''}`}
                    onChange={(e) => {
                      setFieldValue('name', e.target.value);
                    }}
                  />
                  <ErrorMessage component="div" name="name" className="text-invalid" />
                </div>
                <div className="col-6">
                  <label>อาคาร</label>
                  <input
                    value={values.name}
                    name="name"
                    type="text"
                    className={`form-input ${touched.name ? (errors.name ? 'invalid' : 'valid') : ''}`}
                    onChange={(e) => {
                      setFieldValue('name', e.target.value);
                    }}
                  />
                  <ErrorMessage component="div" name="name" className="text-invalid" />
                </div>
                
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button type="submit" className="btn btn-success mx-1">
                  บันทึก
                </button>
                <button type="reset" className="btn btn-secondary mx-1">
                  ล้างค่า
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
}

export default ModalForm;
