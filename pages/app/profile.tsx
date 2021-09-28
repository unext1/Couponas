import React, { useEffect, useState } from "react";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import router, { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signOut, updateProfile, updateEmail } from "firebase/auth";
import Link from "next/link";

const AppProfile = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [profileName, setProfileName] = useState(user?.displayName);
  const [profilePicture, setProfilePicture] = useState(user?.photoURL);

  const handleProfile = (e) => {
    e.preventDefault();

    setProfileName(e.target.displayName.value);
    setProfilePicture(e.target.profilePicture.value);
    if (
      user.displayName !== e.target.displayName.value ||
      user.photoURL !== e.target.profilePicture.value
    ) {
      updateProfile(user, {
        displayName: e.target.displayName.value,
        photoURL: e.target.profilePicture.value,
      })
        .then(() => {
          console.log("updated");
        })
        .catch((error) => {
          console.log("error :-(");
        });
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="loader bg-gray-700 p-5 rounded-full flex space-x-3">
          <div className="w-5 h-5 bg-gray-100 rounded-full animate-bounce"></div>
          <div className="w-5 h-5 bg-gray-100 rounded-full animate-bounce"></div>
          <div className="w-5 h-5 bg-gray-100 rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Profile</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
              <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                <div className="ml-4 mt-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {profilePicture ? (
                        <img
                          className="h-12 w-12 rounded-full"
                          src={profilePicture}
                          alt=""
                        />
                      ) : (
                        <img
                          className="h-12 w-12 rounded-full"
                          src={user.photoURL}
                          alt=""
                        />
                      )}
                    </div>

                    <div className="ml-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900 capitalize">
                        {profileName
                          ? profileName
                          : user.email.substring(
                              0,
                              user.email.lastIndexOf("@")
                            )}
                      </h3>
                      <p className="text-sm text-gray-500">
                        <a href="#">{user.email}</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ml-4 mt-4 flex-shrink-0 flex">
                  <button
                    type="button"
                    onClick={() =>
                      signOut(auth)
                        .then(() => {
                          router.push("/login");
                        })
                        .catch((error) => {
                          console.log(error);
                        })
                    }
                    className="relative inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="-ml-1 mr-2 h-5 w-5 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>

                    <span>Logout</span>
                  </button>
                  <Link href="/">
                    <a className="relative inline-flex items-center px-4 py-2 ml-5 shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="-ml-1 mr-2 h-5 w-5 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>

                      <span>Go to website</span>
                    </a>
                  </Link>
                </div>
              </div>

              <form
                className="space-y-8 divide-y divide-gray-200"
                onSubmit={(e) => handleProfile(e)}
              >
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                  <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Personal Information
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Use a permanent address where you can receive mail.
                      </p>
                    </div>
                    <div className="space-y-6 sm:space-y-5">
                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                          Email address
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder={user?.email}
                            autoComplete="email"
                            readOnly
                            className="max-w-lg block w-full py-1 shadow-sm pl-2 focus:ring-blue-600 capitalize outline-none focus:border-blue-600 sm:max-w-xs sm:text-sm border-2 border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label
                          htmlFor="displayName"
                          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                          Display Name
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                          <input
                            type="text"
                            name="displayName"
                            id="displayName"
                            defaultValue={user?.displayName}
                            autoComplete="given-name"
                            className="max-w-lg block w-full py-1 shadow-sm pl-2 focus:ring-blue-600 capitalize outline-none focus:border-blue-600 sm:max-w-xs sm:text-sm border-2 border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                        <label
                          htmlFor="profilePicture"
                          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                          Profile Picture
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                          <input
                            type="text"
                            name="profilePicture"
                            id="profilePicture"
                            defaultValue={user?.photoURL}
                            autoComplete="given-name"
                            className="max-w-lg block w-full py-1 shadow-sm pl-2 focus:ring-blue-600  outline-none focus:border-blue-600 sm:max-w-xs sm:text-sm border-2 border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-5">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      value="Submit"
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
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

export default AppProfile;
