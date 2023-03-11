import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreatePost = () => {
  const { user } = useContext(AuthContext);
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

    fetch("http://localhost:5000/content", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };
  return (
    <form
      onSubmit={handleContent}
      className="flex  items-center justify-center shadow-lg p-4 rounded-xl  w-full gap-2"
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
