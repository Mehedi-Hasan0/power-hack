import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Header = ({ userData }) => {
  const navigate = useNavigate();
  const logOut = () => {
    window.localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <nav className=" bg-slate-300">
        <div className="mx-auto max-w-screen-2xl 2xl:px-0 sm:px-14 lg:px-16 py-2 flex justify-between items-center">
          <p className=" font-['poppins'] text-2xl text-black font-semibold">
            Power Hack
          </p>
          <div>
            <Link to="/" className=" text-sm font-medium mr-4">
              Bill
            </Link>
            {userData ? (
              <Link
                onClick={logOut}
                to="/login"
                className=" text-sm font-medium capitalize"
              >
                Logout
              </Link>
            ) : (
              <Link to="/login" className=" text-sm font-medium capitalize">
                Login
              </Link>
            )}
          </div>
          <p>Paid Total: 0</p>
        </div>
      </nav>
    </>
  );
};

export default Header;
