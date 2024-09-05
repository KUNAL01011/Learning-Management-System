import Link from "next/link";
import React from "react";

type Props = {};

const Footer = () => {
  return (
    <footer className="bg-[#060235]">
      <div className="broder broder-[#0000000e] dark:border-[#ffffff1e]" />
      <br />
      <div className="w-[95%] 800px:w-full 800px:max-w[85%] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">
              About
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/courses"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="/course-dashboard"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Course Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">
              Social Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Youtube
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="text-[20px[ font-[600] text-black dark:text-white pb-3">
            Contact Info
          </div>
          <p className="text-base text-black dark:text-gray-300 dark:hover:text-white pb-2">Call Us: 1-885-655-5786</p> */}
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">
              Contact info
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Call Us: 1-885-655-5786
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Address: +7011 Vermont Ave, Los Angeles, CA 90044
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Mail Us : kunal@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <p className="text-center text-black dark:text-white pt-7 pb-7 border-t-2 border-gray-700">
          Copyright &copyright; 2303 LMS | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
