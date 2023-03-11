import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../context/AuthProvider";
import MySinglePost from "./MySinglePost";

const MyPosts = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/content/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.success) {
        //   console.log(data);
        setPosts(data.data);
        // } else {
        //   console.log(data);
        //   toast.error(data.error);
        // }
      });
  }, [user?.email]);
  return (
    <div className="">
      {posts.map((post) => (
        <MySinglePost post={post} key={post._id} />
      ))}
    </div>
  );
};

export default MyPosts;
