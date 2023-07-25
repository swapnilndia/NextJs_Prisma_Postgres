import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";
const prisma = new PrismaClient();

export async function POST(request: NextRequest, response: NextResponse) {
  const myBody = await request.json();
  console.log(myBody);

  const firstName = myBody.firstName;
  const lastName = myBody.lastName;
  const email = myBody.email;
  const userInfo = await prisma.userInfo.create({
    data: {
      first_Name: firstName,
      last_Name: lastName,
      e_mail: email,
    },
  });

  console.log(userInfo);

  return new NextResponse(
    JSON.stringify({
      users: userInfo,
      status: 'success'
    })
  );
}
