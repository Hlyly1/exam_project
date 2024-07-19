type RouterDataType = typeof routersData
export type RouterKeys = keyof RouterDataType


export const routersData = {
  login: {
    //登录
    path: "/login",
    hasMenu: false,
  },
  admin_manage: {
    //管理员页面 超级管理员
    path: "/admin_manage",
    hasMenu: true,
  },
  corret_exam: {
    // 批改试卷 管理员
    path: "/corret_exam/:exam_id",
    hasMenu: true,
  },
  corret_exam_list: {
    //批阅试卷列表
    path: "/corret_exam_list",
    hasMenu: false,
  },
  exam: {
    //考试 学生
    path: "/exam/:exam_id",
    hasMenu: true,
  },
  exam_history: {
    //考试记录    学生 管理员
    path: "/exam_history",
    hasMenu: true,
  },
  exam_select: {
    //考题选择 学生
    path: "/exam_select",
    hasMenu: true,
  },
  person_info: {
    //个人信息录入 学生 管理员
    path: "/person_info",
    hasMenu: false,
  },
  read_exam: {
    //查看试卷  学生 管理员
    path: "/read_exam/:exam_id",
    hasMenu: true,
  },
  student_manage: {
    //学生管理   管理员
    path: "/student_manage",
    hasMenu: true,
  },
  subject_add: {
    //考题录入   管理员
    path: "/subject_add",
    hasMenu: true,
  },
  subject_manage: {
    //课程管理   管理员
    path: "/subject_manage",
    hasMenu: true,
  },
};
