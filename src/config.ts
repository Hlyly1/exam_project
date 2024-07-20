type RouterDataType = typeof routersData;
export type RouterKeys = keyof RouterDataType;

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

export const studentMenus = [
  {
    label: "考题管理",
    key: "exam_select",
  },
  {
    label: "考试记录",
    key: "exam_history",
  },
];


export const adminMenus = [
  {
    label: "阅卷列表",
    key: "corret_exam_list",
  },
  {
    label: "考试管理",
    key: "subject_add",
  },
  {
    label: "课程管理",
    key: "subject_manage",
  },
  {
    label: "学员管理",
    key: "student_manage",
  },
];

export const superAdminMenus = [
  {
    label: "阅卷列表",
    key: "corret_exam_list",
  },
  {
    label: "考题管理",
    key: "subject_add",
  },
  {
    label: "课程管理",
    key: "subject_manage",
  },
  {
    label: "学员管理",
    key: "student_manage",
  },
  {
    label: "管理员管理",
    key: "admin_manage",
  }
];