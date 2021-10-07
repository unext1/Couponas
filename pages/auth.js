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

  const [currentUser, SetCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
        SetCurrentUser(user);
      } else {
        console.log("no user ");
      }
    });
    return unsubscribe;
  }, []);

  const profileUpdate = (dN, pU) => {
    if (currentUser.displayName !== dN || currentUser.photoURL !== pU) {
      updateProfile(currentUser, {
        displayName: dN,
        photoURL: pU,
      })
        .then(() => {
          console.log("user updated");
        })
        .catch((error) => {
          console.log("error :-(");
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
      {!loading && children}
    </AuthContext.Provider>
  );
};
