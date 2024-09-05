"use client";
import DashboardHeader from "@/app/components/Admin/DashboardHeader";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar";
import Heading from "@/app/utils/Heading";
import EditCourse from '../../../components/Admin/Course/EditCourse'
import React from "react";
// import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
// import Heading from "../../utils/Heading";
// import CreateCourses from "../../components/Admin/Course/CreateCourse";
// import DashboardHeader from "../../../app/components/Admin/DashboardHeader";

type Props = {};

const page = ({params}:any) => {
    const id = params?.id;
  return (
    <div>
      <Heading
        title="LMS - Admin"
        description="LMS is a platfrom for students to learn and get help from teachers"
        keywords="Prograaming, MERN, Redux, Machine Learning"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <EditCourse id={id}/>
        </div>
      </div>
    </div>
  );
};

export default page;
