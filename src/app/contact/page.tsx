import Link from "next/link";
import React from "react";
import AddContact from "../components/AddContact";

const contact = () => {
  return (
    <div>
      <button>
        <Link href={"/"}>Home Page</Link>
      </button>
      <button>
        <Link href={"/userList"}>UserList Page</Link>
      </button>

      <AddContact />
    </div>
  );
};

export default contact;
