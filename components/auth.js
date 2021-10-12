import React, {
  useEffect,
  useContext,
  createContext,
  useState,
  Children,
} from "react";
import {
  getAuth,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = getAuth();

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setLoading(false);
      } else {
        console.log("no user");
      }
    });
  }, []);

  const profileUpdate = (dN, pU) => {
    let oldUser = currentUser;

    setCurrentUser({ ...currentUser, displayName: dN, photoURL: pU });

    updateProfile(auth.currentUser, {
      displayName: dN,
      photoURL: pU,
    })
      .then(() => {})
      .catch((error) => {
        console.log("error :-(");
        console.log(error);
        setCurrentUser(oldUser);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, profileUpdate, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
