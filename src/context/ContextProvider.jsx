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

export const Context = createContext();
const auth = getAuth(app);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //==> Post Delete <===//
  const handleDeletePost = (id) => {
    fetch(`http://localhost:5000/content/${id}`, {
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
    googleLogIn,
    signIn,
    updateUser,
    logOut,
    user,
    loading,
  };
  return <Context.Provider value={authInfo}>{children}</Context.Provider>;
};

export default ContextProvider;
