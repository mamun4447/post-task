import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase.config";
import { toast } from "react-hot-toast";
import { success } from "daisyui/src/colors";

export const ContextProvider = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});

  // ===>User provider<===//
  fetch(`http://localhost:8000/users/${user?.email}`)
    .then((res) => res.json())
    .then((data) => setUserData(data.data));

  //==> Post Delete <===//
  const handleDeletePost = (id) => {
    fetch(`http://localhost:8000/content/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
      });
  };

  //==> Create User <===//
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //==>LogIn<==//
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //==>updateUser<==//
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, { displayName: userInfo });
  };

  const googleLogIn = (Provider) => {
    setLoading(true);
    return signInWithPopup(auth, Provider);
  };

  //==>LogOut<==//
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("User observing");
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    handleDeletePost,
    userData,
    googleLogIn,
    signIn,
    updateUser,
    logOut,
    user,
    loading,
  };
  return (
    <ContextProvider.Provider value={authInfo}>
      {children}
    </ContextProvider.Provider>
  );
};

export default AuthProvider;
