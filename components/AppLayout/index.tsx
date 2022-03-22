import React, { FC, useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import Navbar from "./navbar";
import app from "../../firebase/firebase.config";
import { getAuth } from "firebase/auth";
import { AuthContext } from "../auth";

export const AppLayout: FC = ({ children }) => {
  const auth = getAuth(app);

  const router = useRouter();

  useEffect(() => {
    if (!auth.currentUser) {
      router.push("/login");
    }
  }, []);

  if (!auth.currentUser) {
    return <h1 className="text-gray-100">nothing to see</h1>;
  }
  return (
    <div className="flex h-screen bg-gray-100 ">
      <Navbar />
      <main className="flex-1 relative w-full h-full overflow-y-auto focus:outline-none ">
        {children}
      </main>
    </div>
  );
};
