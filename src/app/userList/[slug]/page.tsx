import React from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const users1 = async (identifier: any) => {
  const response = await prisma.userInfo.findUnique({
    where: {
      id: identifier,
    },
  });
  return response;
};
const userDetail = async ({ params }: any) => {
  const userDetail = await users1(params.slug);
  console.log(userDetail);
  return (
    <div>
      {userDetail !== null && (
        <div>
          <h1>{userDetail.id}</h1>
          <h2>{userDetail.first_Name}</h2>
          <h3>{userDetail.last_Name}</h3>
          <h4>{userDetail.e_mail}</h4>
        </div>
      )}
    </div>
  );
};

export default userDetail;
