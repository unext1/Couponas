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
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const router = useRouter();
  const provider = new GoogleAuthProvider();

  const [currentUser, setCurrentUser] = useState(auth.currentUser);
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

    setCurrentUser({
      ...currentUser,
      displayName: dN,
      photoURL: pU,
    });

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
        setCurrentUser(undefined);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = (e, email, password) => {
    e.preventDefault();
    router.push("/app");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push("/app");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  const handleSignup = (e, email, password) => {
    e.preventDefault();
    router.push("/app");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push("/app");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const googleLogin = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then(() => {
        router.push("/app");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        profileUpdate,
        logout,
        loading,
        handleLogin,
        handleSignup,
        googleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
