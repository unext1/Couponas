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
  const [profileRefresh, setProfileRefresh] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        console.log("no user");
      }
    });
    setProfileRefresh("negative");
  }, [profileRefresh]);

  const profileUpdate = (dN, pU) => {
    if (currentUser.displayName !== dN || currentUser.photoURL !== pU) {
      updateProfile(currentUser, {
        displayName: dN,
        photoURL: pU,
      })
        .then(() => {
          setProfileRefresh("refresh");
        })
        .catch((error) => {
          console.log("error :-(");
          console.log(error);
        });
    }
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
    <AuthContext.Provider value={{ currentUser, profileUpdate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
