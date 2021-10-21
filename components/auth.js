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
        setCurrentUser(currentUser);
        setLoading(false);
        console.log(currentUser);
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
    console.log(currentUser);

    updateProfile(auth.currentUser, {
      displayName: dN,
      photoURL: pU,
    })
      .then(() => {
        console.log(currentUser);
      })
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
        setCurrentUser(null);
        console.log("loggedout" + currentUser);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = (e, email, password) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(userCredential.user);
        console.log("logged in", user);
        router.push("/app");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  const handleSignup = (e, email, password) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(userCredential.user);

        console.log("registered", user);
        router.push("/app");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const googleLogin = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((user) => {
        setCurrentUser(user.user);
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
