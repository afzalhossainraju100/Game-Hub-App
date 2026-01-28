import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config.js";

export const AuthContext = createContext();

const auth = getAuth(app);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update user profile
  const updateUser = (updatedData) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, updatedData);
    }
    return Promise.reject(new Error("No user is currently logged in"));
  };

  // Sign out user
  const logOut = () => {
    return signOut(auth);
  };

  // Monitor auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    updateUser,
    logOut,
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
