import React, { FC, useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import Navbar from "./navbar";
import app from "../../firebase/firebase.config";
import { getAuth } from "firebase/auth";

export const AppLayout: FC = ({ children }) => {
  const auth = getAuth(app);
  const user = auth.currentUser;
  const router = useRouter();

  useEffect(() => {
    console.log(user);
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (!user) {
    return <h1 className="text-gray-100">nothing to see</h1>;
  }
  return (
    <div className="flex h-screen bg-gray-100">
      <Navbar />
      <main className="flex-1 relative w-full h-full overflow-y-auto focus:outline-none ">
        {children}
      </main>
    </div>
  );
};
