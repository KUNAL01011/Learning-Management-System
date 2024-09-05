"use client";
import DashboardHeader from "@/app/components/Admin/DashboardHeader";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar";
import Heading from "@/app/utils/Heading";
import React from "react";
import EditCategories from "../../components/Admin/Customization/EditCategories";
import AdminProtected from "@/app/hooks/adminProtected";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
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
            <EditCategories />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
