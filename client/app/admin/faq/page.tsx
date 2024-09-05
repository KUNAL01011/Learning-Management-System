'use client'
import DashboardHero from "@/app/components/Admin/DashboardHero";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar";
import AdminProtected from "@/app/hooks/adminProtected";
import Heading from "@/app/utils/Heading";
import React from "react";
import EditFaq from '../../components/Admin/Customization/EditFaq'

type Props = {};

const page = (props: Props) => {
  return (
    <AdminProtected>
      <div>
        <Heading
          title="Web-Lms - Admin"
          description="LMS is a platform for students to learn and get help from teachers"
          keywords="Programing,MERN,Redux,Machine Learning"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <EditFaq/>
          </div>
        </div>
      </div>
    </AdminProtected>
  );
};

export default page;
