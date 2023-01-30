import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Body from "../shared/Body/Body";
import Header from "../shared/Header/Header";

const Layout = () => {
  // const [userData, setUserData] = useState("");
  // const navigate = useNavigate();
  // useEffect(() => {
  //   fetch("https://power-hack-server-livid.vercel.app/userData", {
  //     method: "POST",
  //     crossDomain: true,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify({
  //       token: window.localStorage.getItem("token"),
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, "userData");

  //       setUserData(data.data);
  //       if (data.data == "token expired") {
  //         alert("Token expired login again");
  //         window.localStorage.clear();
  //         navigate("/login");
  //       }
  //     });
  // }, []);
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

export default Layout;
