import DashboardHero from "@/app/components/Admin/DashboardHero";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar";
import AdminProtected from "@/app/hooks/adminProtected";
import Heading from "@/app/utils/Heading";
import AllUsers from '../../components/Admin/Users/AllUsers'
import React from "react";
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
            <AllUsers isTeam={false}/>
          </div>
        </div>
      </div>
    </AdminProtected>
  );
};

export default page;
