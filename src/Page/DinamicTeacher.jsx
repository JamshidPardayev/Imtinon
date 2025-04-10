import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { RiGraduationCapLine } from "react-icons/ri";
import { MdOutlineLocalPostOffice } from "react-icons/md";

const DynamicTeacher = () => {
  const [teacher, setTeacher] = useState();
  const { id } = useParams();


  
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.ashyo.fullstackdev.uz/users/${id}`, {
          headers: {
            "x-auth-token": token,
          },
        });
        setTeacher(response.data); // Assuming the API returns an object with teacher info
      } catch (error) {
        console.error("Error fetching teacher data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="py-4 px-8">
      <Link to="/Teachers">
        <button className="w-[150px] h-[40px] my-3 bg-[#f4f4f4] text-[#333333]">Back to Teachers</button>
      </Link>
      <div className="flex flex-wrap gap-x-[50px] mt-4 border py-4 px-2 border-gray-300 my-1 items-start overflow-x-auto">
        <div className="text-center">
          <img src="../image/download.png" alt="" className="max-w-[200px] mx-auto" />
          <h2 className="text-[#17a2b8] font-bold mt-2">Name: {teacher?.fullname}</h2>
        </div>
        <div className="flex flex-col justify-between gap-y-2">
          <p>Email: {teacher?.email}</p>
          <p>Role: {teacher?.role}</p>
          <p>Created At: {new Date(teacher?.createdAt).toLocaleDateString()}</p>
          <p>Updated At: {new Date(teacher?.updatedAt).toLocaleDateString()}</p>
          <div className="flex gap-2 mt-2 ">
            <p className="flex justify-center items-center w-[60px] h-[60px] bg-[#EFF3FA] rounded-[8px] hover:bg-gray-300 duration-300"><RiGraduationCapLine className="text-[28px] text-[#8A8A8A]"/></p>
            <p className="flex justify-center items-center w-[60px] h-[60px] bg-[#EFF3FA] rounded-[8px] hover:bg-gray-300 duration-300"><FiPhoneCall className="text-[24px] text-[#8A8A8A] "/></p>
            <p className="flex justify-center items-center w-[60px] h-[60px] bg-[#EFF3FA] rounded-[8px] hover:bg-gray-300 duration-300"><MdOutlineLocalPostOffice className="text-[24px] text-[#8A8A8A] "/></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicTeacher;
