import React from "react";
import Heading from "../utils/Heading";
import AdminSidebar from "../components/Admin/sidebar/AdminSidebar";
import AdminProtected from "../hooks/adminProtected";
import DashboardHero from "../components/Admin/DashboardHero"
type Props = {};

const Page = (props: Props) => {
  return (
    <AdminProtected>
      <div>
        <Heading
          title="Web-Lms - Admin"
          description="LMS is a platform for students to learn and get help from teachers"
          keywords="Programing,MERN,Redux,Machine Learning"
        />
        <div className="flex h-[200vh]">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero isDashboard = {true}/>
          </div>
        </div>
      </div>
    </AdminProtected>
  );
};

export default Page;
