import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { ContextProvider } from "../context/ContextProvider";
import MySinglePost from "./MySinglePost";

const MyPosts = () => {
  const { user } = useContext(ContextProvider);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/content/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          console.log(data);
          setPosts(data.data);
        } else {
          console.log(data);
          toast.error(data.error);
        }
      });
  }, [user?.email]);
  console.log(posts);
  return (
    <div className=" h-[80vh] w-full">
      {posts.map((post) => (
        <MySinglePost post={post} key={post._id} />
      ))}
    </div>
  );
};

export default MyPosts;
