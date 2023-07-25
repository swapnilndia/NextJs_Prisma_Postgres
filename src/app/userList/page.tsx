import React from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
const prisma = new PrismaClient();

const users1 = async () => {
  const response = await prisma.userInfo.findMany();
  console.log(response);
  return response;
};

const userList = async () => {
  const users = await users1();
  console.log(users);
  return (
    <div>
      <div>
        <button>
          <Link href={"/"}>Home Page</Link>
        </button>
        <button>
          <Link href={"/contact"}>Contact Page</Link>
        </button>
      </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>id</th>
            <th>first_Name</th>
            <th>last_Name</th>
            <th>e_mail</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <Link href={`/userList/${user.id}`}>
                <td>{user.id}</td>
                <td>{user.first_Name}</td>
                <td>{user.last_Name}</td>
                <td>{user.e_mail}</td>
              </Link>{" "}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default userList;
