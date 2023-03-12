import React, { useContext } from "react";
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
    <div className="text-center mt-72">
      <PulseLoader />
    </div>;
  }
  return (
    <div className="mx-auto container">
      <NavBar />
      <CreatePost />
      <Content />
    </div>
  );
};

export default Home;
