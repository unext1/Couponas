import React, { FC, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
import Navbar from "./navbar";

export const AppLayout: FC = ({ children }) => {
  const router = useRouter();
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

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
      <Navbar user={user} />
      <main className="flex-1 relative w-full h-full overflow-y-auto focus:outline-none pt-10 md:pt-0">
        {children}
      </main>
    </div>
  );
};
