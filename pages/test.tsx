import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from "../components/auth";
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";

const Email = () => {
  const router = useRouter();
  const [email, setEmail] = useState(
    window.localStorage.getItem("emailForSignIn") || ""
  );
  const [password, setPassword] = useState("");
  const auth = getAuth();

  useEffect(() => {
    // Get the saved email
    const saved_email = window.localStorage.getItem("emailForSignIn");

    // Verify the user went through an email link and the saved email is not null
    if (isSignInWithEmailLink(auth, window.location.href) && !!saved_email) {
      // Sign the user in
      signInWithEmailLink(auth, saved_email, window.location.href);
      router.push("/app");
    }
  }, []);

  const handleLogin = (e, email, password) => {
    e.preventDefault();
    const actionCodeSettings = {
      url: "http://localhost:3000/email",

      handleCodeInApp: true,
    };
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
        console.log("sent");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        // ...
      });
  };

  return (
    <>
      <div className="container mx-auto my-auto px-5 pt-5 block md:hidden">
        <h1 className="font-bold text-xl uppercase mb-1">Login page</h1>
        <div className="h-2 w-full bg-gradient-to-r from-black via-gray-100 rounded to-gray-100" />
      </div>
      <div className="flex items-center justify-center container mx-auto my-auto px-5 py-5 pb-20">
        <div className="text-gray-500 rounded-3xl max-w-5xl shadow-xl w-full overflow-hidden">
          <div className="md:flex w-full">
            <div className="w-full md:w-1/2 py-5 px-5 md:px-10 bg-white">
              <div className="text-center pb-10">
                <h1 className="font-bold text-3xl text-gray-900 pt-3">LOGIN</h1>
                <p>Enter your information to Login</p>
              </div>

              <form onSubmit={(e) => handleLogin(e, email, password)}>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">Email</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3">
                    <label className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex container pt-3 pb-10 pl-1 cursor-pointer hover:text-blue-600 duration-100 transition  ">
                  <Link href="/register">
                    <h1>Don&apos;t have a account ?</h1>
                  </Link>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <input
                      type="submit"
                      value=" LOGIN NOW"
                      className="block w-full max-w-xs mx-auto bg-blue-600 hover:bg-purple-700 text-white rounded-lg px-3 py-3 font-semibold"
                    />
                    <div className="w-full grid grid-cols-2 gap-2 mt-2"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
