import React from "react";
import Content from "../components/Content";
import CreatePost from "../components/CreatePost";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="mx-2">
      <NavBar />
      <CreatePost />
      <Content />
    </div>
  );
};

export default Home;
