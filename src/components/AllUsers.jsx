import React, { useContext, useState } from "react";

const AllUsers = () => {
  const [allUser, setAllUser] = useState([]);
  // console.log(allUser);

  // ===>User<===//
  // fetch(`http://localhost:5000/users`)
  //   .then((res) => res.json())
  //   .then((data) => setAllUser(data.data));
  return <div>all User</div>;
};

export default AllUsers;
