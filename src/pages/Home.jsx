import React, { useContext, useState, CSSProperties } from "react";
import Content from "../components/Content";
import CreatePost from "../components/CreatePost";
import NavBar from "../components/NavBar";
import { Context } from "../context/ContextProvider";
import PulseLoader from "react-spinners/ClipLoader";

// const override: CSSProperties = {
//   size: 15,
//   margin: "2",
//   speedMultiplier: "1",
// };
const Home = () => {
  const { loading } = useContext(Context);

  // Loading
  if (loading) {
    return (
      <div className="text-center mt-72">
        <PulseLoader />
      </div>
    );
  }
  return (
    <div className="mx-2">
      <NavBar />
      <CreatePost />
      <Content />
    </div>
  );
};

export default Home;
