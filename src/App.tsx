import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Layout from "./common/layout";
import { routersData } from "./config";
import Login from "@/page/login";
import Admin from "./page/admin";
import CorretExam from "./page/corret_exam";
import CorretExamList from "./page/corret_exam_list";
import Exam from "./page/exam";
import ExamHistory from "./page/exam_history";
import ExamSelect from "./page/exam_select";
import PersonInfo from "./page/person_info";
import ReadExam from "./page/read_exam";
import StudentManage from "./page/student_manage";
import SubjectAdd from "./page/subject_add";
import SubjectManage from "./page/subject_manage";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to={"/login"}></Navigate>}></Route>
        <Route path={routersData.login.path} element={<Login />}></Route>
        <Route path={routersData.admin_manage.path} element={<Admin />}></Route>
        <Route
          path={routersData.corret_exam.path}
          element={<CorretExam />}
        ></Route>
        <Route
          path={routersData.corret_exam_list.path}
          element={<CorretExamList />}
        ></Route>
        <Route path={routersData.exam.path} element={<Exam />}></Route>
        <Route
          path={routersData.exam_history.path}
          element={<ExamHistory />}
        ></Route>
        <Route
          path={routersData.exam_select.path}
          element={<ExamSelect />}
        ></Route>
        <Route
          path={routersData.person_info.path}
          element={<PersonInfo />}
        ></Route>
        <Route path={routersData.read_exam.path} element={<ReadExam />}></Route>
        <Route
          path={routersData.student_manage.path}
          element={<StudentManage />}
        ></Route>
        <Route
          path={routersData.subject_add.path}
          element={<SubjectAdd />}
        ></Route>
        <Route
          path={routersData.subject_manage.path}
          element={<SubjectManage />}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
