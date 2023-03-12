import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Context } from "../context/ContextProvider";

const CreatePost = () => {
  const { user } = useContext(Context);
  //   console.log(user);
  const handleContent = (event) => {
    event.preventDefault();

    const form = event.target;
    const content = form.content.value;
    const post = {
      content,
      email: user?.email,
      name: user?.displayName,
      userImg: user?.photoURL,
    };

    //==> Create Post <===//
    fetch("https://content-post.vercel.app/content", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          form.reset();
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
      });
  };
  return (
    <form
      onSubmit={handleContent}
      className="flex  items-center justify-center shadow-md p-4 rounded-lg  w-full gap-2 mt-2"
    >
      {/* ==Avatar== */}
      <div className="avatar">
        <div className="w-12 rounded-full">
          {user?.photoURL ? (
            <img src={user.photoURL} alt="" />
          ) : (
            <img
              src="https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg"
              alt=""
            />
          )}
        </div>
      </div>

      {/* ==Input== */}
      <textarea
        name="content"
        type="text"
        placeholder="Write content..."
        className="input border-none  w-full py-3"
      />
      <button className="btn">Post</button>
    </form>
  );
};

export default CreatePost;
