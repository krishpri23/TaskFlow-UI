import React from "react";
import { Link } from "react-router-dom";

const DashIntro = () => {
  return (
    <main className="w-full min-h-full bg-teal-50 px-10 py-4">
      <h1> Welcome! </h1>
      <ul className="flex flex-col justify-center items-start gap-4  ">
        {/* Relative routing which is takes to dash/users */}
        <Link to="notes"> View notes </Link>
        <Link to="users"> View user settings </Link>
        <Link to="users/add"> Add new User </Link>
        <Link to="notes/new"> Add new notes </Link>
      </ul>
    </main>
  );
};

export default DashIntro;