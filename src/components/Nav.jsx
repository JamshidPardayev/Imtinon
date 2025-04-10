import React from "react";
import { NavLink } from "react-router-dom";
import { RiHome4Line } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import { BsBank } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { ImStatsBars } from "react-icons/im";

export const Nav = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen
          ? "md:min-w-[241px] md:max-w-[241px] max-w-[100px] min-w-[100px]"
          : "md:max-w-[100px] md:min-w-[100px] min-w-[241px] max-w-[241px]"
      } sticky top-0 left-0 part1 bg-[#152259]  min-h-[100vh]  text-white  duration-500`}
    >
      <div className="h-[160px] border-b-[1px] border-b-gray-400 flex flex-col justify-center items-center">
        <img src="./image/ellipse.png" alt="" />
        <p
          className={`${
            isOpen ? "md:block hidden" : "md:hidden block"
          } text-[14px]  font-semibold mt-2 `}
        >
          {" "}
          Udemy Inter. school
        </p>
      </div>
      <ul className="px-[25px]">
        <NavLink to="/Dashboard">
          <li
            className={`${
              isOpen ? "md:w-[192px] w-[50px]" : "md:w-[50px] w-[192px]"
            } flex items-center h-[40px] w-[192px] rounded-[4px] px-[16px] gap-x-[15px] text-[14px] font-semibold mt-[16px] hover:bg-[#509CDB] duration-300`}
          >
            <RiHome4Line />{" "}
            <p className={`${isOpen ? "md:block hidden" : "md:hidden block"}`}>
              Dashboard
            </p>
          </li>
        </NavLink>
        <NavLink to={"/Teachers"}>
          <li
            className={`${
              isOpen ? "md:w-[192px] w-[50px]" : "md:w-[50px] w-[192px]"
            } flex items-center h-[40px] w-[192px] rounded-[4px] px-[16px] gap-x-[15px] text-[14px] font-semibold mt-[8px] hover:bg-[#509CDB] duration-300 `}
          >
            <RiHome4Line />{" "}
            <p className={`${isOpen ? "md:block hidden" : "md:hidden block"}`}>
              Teachers
            </p>
          </li>
        </NavLink>
        <li
          className={`${
            isOpen ? "md:w-[192px] w-[50px]" : "md:w-[50px] w-[192px]"
          } flex items-center h-[40px] w-[192px] rounded-[4px] px-[16px] gap-x-[15px] text-[14px] font-semibold mt-[8px] hover:bg-[#509CDB] duration-300 `}
        >
          <LuGraduationCap />{" "}
          <p className={`${isOpen ? "md:block hidden" : "md:hidden block"}`}>
            Students
          </p>
        </li>
        <li
          className={`${
            isOpen ? "md:w-[192px] w-[50px]" : "md:w-[50px] w-[192px]"
          } flex items-center h-[40px] w-[192px] rounded-[4px] px-[16px] gap-x-[15px] text-[14px] font-semibold mt-[8px] hover:bg-[#509CDB] duration-300 `}
        >
          <BsBank />{" "}
          <p className={`${isOpen ? "md:block hidden" : "md:hidden block"}`}>
            Billing
          </p>
        </li>
        <li
          className={`${
            isOpen ? "md:w-[192px] w-[50px]" : "md:w-[50px] w-[192px]"
          } flex items-center h-[40px] w-[192px] rounded-[4px] px-[16px] gap-x-[15px] text-[14px] font-semibold mt-[8px] hover:bg-[#509CDB] duration-300 `}
        >
          <CiSettings />{" "}
          <p className={`${isOpen ? "md:block hidden" : "md:hidden block"}`}>
            Settings and Profile
          </p>
        </li>
        <li
          className={`${
            isOpen ? "md:w-[192px] w-[50px]" : "md:w-[50px] w-[192px]"
          } flex items-center h-[40px] w-[192px] rounded-[4px] px-[16px] gap-x-[15px] text-[14px] font-semibold mt-[8px] hover:bg-[#509CDB] duration-300 `}
        >
          <ImStatsBars />{" "}
          <p className={`${isOpen ? "md:block hidden" : "md:hidden block"}`}>
            Exams
          </p>
        </li>
        <li
          className={`${
            isOpen ? "md:w-[192px] w-[50px]" : "md:w-[50px] w-[192px]"
          } flex items-center h-[40px] w-[192px] rounded-[4px] px-[16px] gap-x-[15px] text-[14px] font-semibold mt-[80px] hover:bg-[#509CDB] duration-300 `}
        >
          <BsBank />{" "}
          <p className={`${isOpen ? "md:block hidden" : "md:hidden block"}`}>
            Features
          </p>{" "}
          <span
            className={`${
              isOpen ? "md:block hidden" : "md:hidden block"
            } w-[41px] h-[14px] rounded-[8px] bg-[#B9D7F1] text-[10px] text-center text-black `}
          >
            NEW
          </span>
        </li>
      </ul>
    </div>
  );
};
