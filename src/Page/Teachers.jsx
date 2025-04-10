import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Teachers = () => {
  const [users, setUsers] = useState([]);
  const [usersText, setUsersText] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUsers = async () => {
      if (!token) {
        console.error("No token found");
        return;
      }

      try {
        const response = await axios.get("https://api.ashyo.fullstackdev.uz/users", {
          headers: { "x-auth-token": token },
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [token]);

  const filteredUsers = users.filter(user =>
    user.fullname.toLowerCase().includes(usersText.toLowerCase()) ||
    user.email.toLowerCase().includes(usersText.toLowerCase())
  );

  return (
    <div className="w-full md:px-[35px] pr-[10px] pl-[30px] py-4">
      <div className="flex flex-wrap gap-3 justify-between items-center">
        <h1 className="text-[#4F4F4F] text-[20px] font-medium">Teachers</h1>
        <Link to="/AddTeacher">
          <button className="flex items-center justify-center gap-x-2 w-[150px] h-[40px] rounded-[4px] bg-[#509CDB] text-white font-semibold hover:bg-blue-800 duration-300">
            <p>Add Teachers</p>
            <IoPersonAddOutline className="text-[18px]" />
          </button>
        </Link>
      </div>

      <div className="flex items-center gap-x-[16px] min-h-[50px] w-full rounded-[8px] bg-[#FCFAFA] px-[16px] mt-[30px]">
        <IoIosSearch className="text-[20px] text-[#8A8A8A]" />
        <input
          type="text"
          placeholder="Search for a teacher by name or email"
          className="w-full h-[50px] bg-[#FCFAFA] outline-none"
          value={usersText}
          onChange={(e) => setUsersText(e.target.value)}
        />
      </div>

      <div className="w-full h-[400px] overflow-y-auto mt-4">
        {filteredUsers.length > 0 ? (
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                {["ID", "Fullname", "Email", "Phone Number", "Role", "CreatedAt", "UpdatedAt"].map((heading) => (
                  <td key={heading} className="font-bold border border-gray-300 p-2">{heading}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                  <tr key={user.id} className="cursor-pointer hover:bg-gray-100">
                    <td className="border border-gray-300 p-2">{user.id}</td>
                    <td className="border border-gray-300 p-2"><Link to={`/DynamicTeacher/${user.id}`}>{user.fullname}</Link></td>
                    <td className="border border-gray-300 p-2">{user.email}</td>
                    <td className="border border-gray-300 p-2">{user.phone_number}</td>
                    <td className="border border-gray-300 p-2">{user.role}</td>
                    <td className="border border-gray-300 p-2">{new Date(user.createdAt).toLocaleString()}</td>
                    <td className="border border-gray-300 p-2">{new Date(user.updatedAt).toLocaleString()}</td>
                  </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="max-w-[372px] mx-auto text-center">
            <img src="./image/notification.png" alt="No Data" className="max-w-[340px] h-[255px] mx-auto" />
            <h2 className="text-[24px] text-[#4F4F4F] mt-[10px] font-semibold">No Teachers at this time</h2>
            <p className="text-[14px] text-[#4F4F4F] mt-[4px] font-medium">Teachers will appear here after they enroll in your school.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Teachers;
