import React, { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // SignUp
  const SinUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //----------User name & photo load----------//
  const UpdateProfile = (name, photoURL) => {
    setLoading(true);
    // setLoader(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  //Login
  const LogInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const GoogleLogin = (Provider) => {
    setLoading(true);
    return signInWithPopup(auth, Provider);
  };
  //LogOut
  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //Set User
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    SinUpWithEmail,
    LogOut,
    user,
    loading,
    GoogleLogin,
    LogInWithEmail,
    UpdateProfile,
  };
  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

export default AuthProvider;
