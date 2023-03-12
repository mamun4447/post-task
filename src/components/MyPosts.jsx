import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Context } from "../context/ContextProvider";
import MySinglePost from "./MySinglePost";

const MyPosts = () => {
  const { user } = useContext(Context);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://content-post.vercel.app/content/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPosts(data.data);
        } else {
          toast.error(data.error);
        }
      });
  }, [user?.email]);
  // console.log(posts);
  return (
    <div className="flex flex-col container mx-auto mr-4">
      <h1 className="text-3xl text-center my-5">My Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {posts.map((post) => (
          <MySinglePost post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
