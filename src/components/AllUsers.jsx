// import React, { useContext, useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
// import { Context } from "../context/ContextProvider";
// import User from "./User";

// const AllUsers = () => {
//   const { user } = useContext(Context);
//   const [allUser, setAllUser] = useState([]);
//   // console.log(allUser);

//   // ===>User<===//
//   useEffect(() => {
//     fetch(`https://content-post.vercel.app/users`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           setAllUser(data.data);
//         } else {
//           toast.error(data.error);
//         }
//       });
//   }, [user]);
//   return (
//     <div className="overflow-x-auto w-[100vw]">
//       <h1 className="text-3xl text-center my-5">All Users</h1>
//       <table className="table w-full">
//         {/* head */}
//         <thead>
//           <tr>
//             <th></th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Favorite Color</th>
//           </tr>
//         </thead>
//         <tbody>
//           {allUser.map(
//             (singleUser) =>
//               singleUser?.role === "user" && (
//                 <User singleUser={singleUser} key={singleUser._id} />
//               )
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AllUsers;
