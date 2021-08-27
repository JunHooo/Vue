import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import ForgetPassword from "../components/ForgetPassword";
import ClassInfo from "../components/ClassInfo";
import GradeInfo from "../components/GradeInfo";
import BaseInfo from "../components/BaseInfo";
import StudentInfo from "../components/StudentInfo";
import ShowEvaluation from "../components/ShowEvaluation";
import Contact from "../components/Contact";
import GradeBaseInfo from "../components/GradeBaseInfo";
// import BookUpdate from "../components/BookUpdate";
import Index from "../components/Index";
import ShowClass from "../components/ShowClass";
import EvaluateTeacher from "../components/EvaluateTeacher";
import AddEvaluate from "../components/AddEvaluate";
import newIndex from "../components/newIndex";
import tBaseInfo from "../components/tBaseInfo";
import tGradeBaseInfo from "../components/tGradeBaseInfo";
import tChangeBaseInfo from "../components/tChangeBaseInfo";
import tShowEvaluation from "../components/tShowEvaluation";
import ChangePassword from "../components/ChangePassword";
import tGradeInfo from "../components/tGradeInfo";
import tShowClass from "../components/tShowClass";
import tChangeGrade from "../components/tChangeGrade";
import tAddGrade from "../components/tAddGrade";
import Login from "../components/Test";
import AddUser from "../components/AddUser";


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: '登录界面',
      component: Test,
      meta: {
        // 页面标题title
        title: '教务管理系统'
      },
    },
    {
      path: "/ChangePassword",
      name: "修改密码",
      component: ChangePassword,
    },
    {
      path: "/AddUser",
      name: "注册",
      component: AddUser,
    },
    {
      path: "/Index",
      name: "个人信息",
      component: Index,
      show: true,
      redirect: "/BaseInfo",
      children: [
        {
          path: "/BaseInfo",
          name: "基本信息",
          component: BaseInfo
        },
        {
          path: "/StudentInfo",
          name: "学籍信息",
          component: StudentInfo
        },
        {
          path: "/Contact",
          name: "联系方式",
          component: Contact
        },
        {
          path: "/GradeInfo",
          name: "成绩信息",
          component: GradeInfo
        },
        {
          path: "/ShowClass",
          name: "查看课程",
          component: ShowClass
        }
      ]
    },
    // {
    //   path: '/update',
    //   component: BookUpdate,
    //   show: false
    // },
    {
      path: '/ClassInfo',
      name: "课程信息",
      component: ClassInfo,
      show: true,
      children: [

      ]
    },
    {
      path: '/GradeInfo',
      name: "成绩信息",
      component: Index,
      show: true,
      children: [
        {
          path: "/GradeBaseInfo",
          name: "成绩查询",
          component: GradeBaseInfo
        },

      ]
    },
    {
      path: '/TeacherEvaluation',
      name: "教师评价",
      component: Index,
      show: true,
      children: [
        {
          path: "/ShowEvaluation",
          name: "查看评价",
          component: ShowEvaluation
        },
        {
          path: "/EvaluateTeacher",
          name: "评价教师",
          component: EvaluateTeacher
        },
        {
          path: "/AddEvaluate",
          name: "添加评价",
          component: AddEvaluate
        },
      ]
    },

    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: "Page1",
    },
    {
      path: '/ForgetPassword',
      name: 'ForgetPassword',
      component: ForgetPassword,
    },
    {
      path:"/newIndex",
      component: newIndex,
      children: [
        {
          path: "/tBaseInfo",
          name: "学生个人信息",
          component: tBaseInfo
        },
        {
          path: "/tChangeBaseInfo",
          name: "修改学生个人信息",
          component: tChangeBaseInfo
        },
        {
          path: "/tGradeBaseInfo",
          name: "学生成绩信息",
          component: tGradeBaseInfo
        },
        {
          path: "/tGradeInfo",
          name: "学生成绩信息",
          component: tGradeInfo
        },
        {
          path: "/tChangeGrade",
          name: "修改学生成绩",
          component: tChangeGrade
        },
        {
          path: "/tShowClass",
          name: "教师课程信息",
          component: tShowClass
        },
        {
          path: "/tChangeBaseInfo",
          name: "修改学生成绩信息",
          component: tChangeBaseInfo
        },
        {
          path: "/tAddGrade",
          name: "录入成绩",
          component: tAddGrade
        },

        {
          path: "/tShowEvaluation",
          name: "查看评价",
          component: tShowEvaluation
        },
      ]
    },
  ],
  mode: 'history'
})
