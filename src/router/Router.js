import React, { Fragment } from "react";
import { connect } from "react-redux";
import { AUTHEN, USERINFO, AUTHORITIES } from "../actions/Authen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../layout/public/PublicLayout";
import PrivateLayout from '../layout/private/PrivateLayout'
import Redirect from "../view/error/Redirect";
import AuthoritiesLayout from "../layout/authorities/AuthoritiesLayout";

//private
import MainDepartmentType from "../view/private/setting/departmentType/MainDepartmentType";
import MainDoctor from "../view/private/setting/doctor/MainDoctor";
import FormDoctor from "../view/private/setting/doctor/form/FormDoctor";
import MainOpenSchedule from "../view/private/openSchedule/MainOpenSchedule";
import FormOpenSchedule from "../view/private/openSchedule/form/FormOpenSchedule";
import MainUser from "../../src/view/private/setting/user/MainUser";
import FormUser from "../view/private/setting/user/form/FormUser";
import MainHospital from "../view/private/openSchedule/form/DataHospital/MainHospital";
import FormHospital from "../view/private/openSchedule/form/DataHospital/FormHospital";
import MainAuthorities from "../view/private/setting/authorities/MainAuthorities";
import EditDepartment from "../view/private/setting/departmentType/EditDepartment"
import FormAuthorities from "../view/private/setting/authorities/form/FormAuthorities";
import EditAuthorities from "../view/private/setting/authorities/form/EditAuthorities"


// public
import FormRegister from "../view/authentication/register/FormRegister";
import MainBook from "../view/public/book/MainBook";
import EditProfile from "../view/public/editProfile/EditProfile";
import EditPassword from "../view/public/editProfile/EditPassword";
import Queue from "../view/public/queue/Queue";
import MainHistory from "../view/public/history/MainHistory";
import Home from "../layout/public/Home";
import CheckQueue from "../view/public/queue/CheckQueue";
import Questionaire from "../view/public/questionnaire/Questionnaire";
import ForgetPassword from '../view/public/editProfile/ForgetPassword';
import Calendars from "../view/public/Calendars";
import ShowDepartment from '../view/public/Department/ShowDepartment'
import ShowDepartmentAll from "../view/public/Department/ShowDepartmentAll";
import Dental from "../view/public/Department/DetailDepartment/dental/Dental";


import MainInformation from "../view/public/information/MainInformation";

//Authorities
import MainBookAuthor from "../view/authorities/book/MainBookAuthor";
import MainHistoryAuthor from "../view/authorities/history/MainHistoryAuthor";
import ManageBook from '../view/authorities/Main/ManageBook'
import View_Questionnaire from "../view/authorities/view_questionnaire/View_Questionnaire";
import CallQueue from "../view/authorities/Main/CallQueue/CallQueue";
import EditProfileAuthor from "../view/authorities/Profile/EditProfileAuthor";
import ForgetPasswordAuthor from "../view/authorities/Profile/ForgetPasswordAuthor";
import EditPasswordAuthor from "../view/authorities/Profile/EditPasswordAuthor";
import OpenQueue from "../view/authorities/open-queue/OpenSchedule";






function Router(props) {
  const role = props.auth.role_id ? parseInt(props.auth.role_id) :  0; // 1 = admin, 0 = user, 2= authorities

  return (
    <Fragment>
      <BrowserRouter>
        {role === 0 ? (
          <PublicLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              
              <Route path="/book-an-appointment" element={<MainBook />} />  
              <Route
                path="/check-book-an-appointment"
                element={<MainHistory />}
              />
              <Route path="/register" element={<FormRegister />} />
              <Route path="/information" element={<MainInformation/>}/>
              <Route path="/information/:Id" element={<MainInformation/>}/>
              <Route path="/calendar" element={<Calendars/>} />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/edit-password" element={<EditPassword />} />
              <Route path="/check-queue" element={<CheckQueue />} />
              <Route path="/Q_user" element={<Queue />} />
              <Route path="/questionnaire" element={<Questionaire/>} />
              <Route path="/forgetPassword" element={<ForgetPassword/>} />
              <Route path="/view-history" element={<MainHistory />} /> 
                <Route path="/showdepartment" element={<ShowDepartment/>} />
              <Route path="/showdepartmentAll" element={<ShowDepartmentAll/>} />
             
              <Route path="/detaildental" element={<Dental/>} />
              <Route path="/detaildental/:DId" element={<Dental/>} /> 

              <Route path="*" element={<Redirect />} />
              
            </Routes>
          </PublicLayout>



        ) : role === 1 ? (
          <PrivateLayout>
            <Routes>
              <Route path="/admin" element={<h1>หลังบ้าน</h1>} />
              <Route path="/admin/data-hospital" element={<MainHospital />}/>
              <Route path="/admin/hospital/form" element={<FormHospital />}/>
              <Route path="/admin/hospital/form/:FId" element={<FormHospital />}/>
              <Route path="/admin/open-schedule"element={<MainOpenSchedule />}/>
              <Route path="/admin/open-schedule/form" element={<FormOpenSchedule />}/>
              <Route path="/admin/department-type"element={<MainDepartmentType />}/>
              <Route path="/admin/doctor" element={<MainDoctor />} />
              <Route path="/admin/doctor/form" element={<FormDoctor />} />
              <Route path="/admin/user" element={<MainUser />} />
              <Route path="/admin/user/form" element={<FormUser />} />
              <Route path="/admin/authorities" element={<MainAuthorities />} />
              <Route path="/admin/authorities/form" element={<FormAuthorities />} />
              <Route path="/admin/edit-authorities" element={<EditAuthorities />} />
              <Route path="/admin/edit-department" element={<EditDepartment />} />
              <Route path="/admin/form-authorities" element={<FormAuthorities/>} />
              <Route path="*" element={<Redirect />} />
            </Routes>
          </PrivateLayout>



        ) : (
          <AuthoritiesLayout>
            <Routes>
              
              <Route path="/author" element={<h1>เจ้าหน้าที่</h1>} />
              <Route path="/author/book-an-appointment"element={<MainBookAuthor/>}/>
              <Route path="/author/history"element={<MainHistoryAuthor />}/>
              <Route path="/view/questionnaire" element={<View_Questionnaire />} />
              <Route path="/author/Manage" element={<ManageBook />} />
              {/* <Route path="/author/Main/View" element={<ViewAssessment/>} /> */}
              <Route path="/author/Main/callqueue" element={<CallQueue/>} />
              <Route path="/author/profile" element={<EditProfileAuthor/>} />
              <Route path="/author/forget-password" element={<ForgetPasswordAuthor/>} />
              <Route path="/author/edit-password" element={<EditPasswordAuthor/>} />
              <Route path="/author/open-queue" element={<OpenQueue/>} />
            </Routes>
          </AuthoritiesLayout>



        )}
      </BrowserRouter>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  auth: state.Authentication,
});

const mapDispatchToProps = (dispatch) => {
  return {
    AUTHEN: (id,  id_card, fullname, role_id) =>
      dispatch(AUTHEN(id, id_card, fullname, role_id)),
    USERINFO: () => dispatch(USERINFO()),
    AUTHORITIES: (id, id_card, fullname, role_id) =>
      dispatch(AUTHORITIES(id, id_card, fullname, role_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
