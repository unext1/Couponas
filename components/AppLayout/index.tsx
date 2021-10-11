import React, { FC, useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import Navbar from "./navbar";
import { AuthContext } from "../../pages/auth";

export const AppLayout: FC = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    console.log(currentUser);
    if (!currentUser) {
      router.push("/login");
    }
  }, [currentUser]);

  if (!currentUser) {
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
