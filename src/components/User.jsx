import React from "react";

const User = ({ singleUser }) => {
  console.log(singleUser);
  return (
    <tr>
      <th>1</th>
      <td>{singleUser?.name}</td>
      <td>{singleUser?.email}</td>
      <td className="flex gap-1">
        <button className="btn btn-sm">Make Admin</button>
        <button className="btn btn-sm btn-warning">Delete</button>
      </td>
    </tr>
  );
};

export default User;
