import React from "react";
import Body from "../../shared/Body/Body";
import Header from "../../shared/Header/Header";

const UserHome = ({ userData }) => {
  return (
    <>
      <Header userData={userData} />
      <Body />
    </>
  );
};

export default UserHome;
