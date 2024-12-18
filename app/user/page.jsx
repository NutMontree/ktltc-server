import React from "react";
import UserCard from "../(components)/UserCard";
import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const getUsers = async () => {
  try {
    const res = await fetch("https://ktltcs.vercel.app/api/Users", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const User = async () => {
  const data = await getUsers();

  if (!data?.users) {
    return <p>No users.</p>;
  }

  const users = data.users;

  const uniqueDepartments = [
    ...new Set(users?.map(({ department }) => department)),
  ];

  return (
    <>
      <nav className="flex justify-between bg-nav p-4">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div icon={faHome} className="icon">
              Home
            </div>
          </Link>
          <Link href="/UserPage/new">
            <div icon={faTicket} className="icon">
              เพิ่มข้อมูล
            </div>
          </Link>
        </div>
        <div>
          <p className=" text-default-text">Ktltc Post</p>
        </div>
      </nav>
      <div className="p-5 flex-grow overflow-y-auto bg-page text-default-text">
        <div>
          {users &&
            uniqueDepartments?.map((uniqueDepartment, departmentIndex) => (
              <div key={departmentIndex} className="mb-4">
                <h2>{uniqueDepartment}</h2>
                <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                  {users
                    .filter((user) => user.department === uniqueDepartment)
                    .map((filteredUser, _index) => (
                      <UserCard id={_index} key={_index} user={filteredUser} />
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default User;
