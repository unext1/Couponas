import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/auth";
import Link from "next/link";

const AppPage = ({ component, ...rest }) => {
  const { currentUser, profileUpdate } = useContext(AuthContext);

  if (!currentUser) {
    return <h1>Loading user</h1>;
  }
  return (
    <>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="max-w-7xl mx-auto p-4 sm:px-6 md:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
            <div className="flex-1 min-w-0">
              <div className="flex items-center">
                {currentUser.photoURL ? (
                  <img
                    className="hidden h-16 w-16 rounded-full sm:block"
                    src={currentUser.photoURL}
                    alt=""
                  />
                ) : (
                  <img
                    className="hidden h-16 w-16 rounded-full sm:block"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                    alt=""
                  />
                )}
                <div>
                  <div className="flex items-center">
                    {currentUser.photoURL ? (
                      <img
                        className="h-16 w-16 rounded-full sm:hidden"
                        src={currentUser.photoURL}
                        alt=""
                      />
                    ) : (
                      <img
                        className="h-16 w-16 rounded-full sm:hidden"
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                        alt=""
                      />
                    )}
                    <h1 className="ml-3 text-xl font-semibold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                      Good morning,
                      <span className="ml-1 capitalize">
                        {currentUser?.displayName
                          ? currentUser.displayName
                          : currentUser.email.substring(
                              0,
                              currentUser.email.lastIndexOf("@")
                            )}
                      </span>
                    </h1>
                  </div>
                  <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                    <dt className="sr-only">Company</dt>
                    <dd className="flex items-center text-xs text-gray-500 font-medium capitalize sm:mr-6">
                      Duke street studio
                    </dd>
                    <dt className="sr-only">Account status</dt>
                    <dd className="mt-3 flex items-center text-xs text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                      Verified account
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="grid grid-cols-12 gap-6">
              <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
                <div className="col-span-12 mt-8">
                  <div className="grid grid-cols-12 gap-6 mt-5">
                    <a
                      className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                      href="#"
                    >
                      <div className="p-5">
                        <div className="flex justify-between">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-blue-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                          </svg>
                          <div className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                            <span className="flex items-center">30%</span>
                          </div>
                        </div>
                        <div className="ml-2 w-full flex-1">
                          <div>
                            <div className="mt-3 text-3xl font-bold leading-8">
                              4.510
                            </div>

                            <div className="mt-1 text-base text-gray-600">
                              Item Sales
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                      href="#"
                    >
                      <div className="p-5">
                        <div className="flex justify-between">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-yellow-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                          <div className="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                            <span className="flex items-center">30%</span>
                          </div>
                        </div>
                        <div className="ml-2 w-full flex-1">
                          <div>
                            <div className="mt-3 text-3xl font-bold leading-8">
                              4.510
                            </div>

                            <div className="mt-1 text-base text-gray-600">
                              Item Sales
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                      href="#"
                    >
                      <div className="p-5">
                        <div className="flex justify-between">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-pink-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                            />
                          </svg>
                          <div className="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                            <span className="flex items-center">30%</span>
                          </div>
                        </div>
                        <div className="ml-2 w-full flex-1">
                          <div>
                            <div className="mt-3 text-3xl font-bold leading-8">
                              4.510
                            </div>

                            <div className="mt-1 text-base text-gray-600">
                              Item Sales
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                      href="#"
                    >
                      <div className="p-5">
                        <div className="flex justify-between">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                            />
                          </svg>
                          <div className="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                            <span className="flex items-center">30%</span>
                          </div>
                        </div>
                        <div className="ml-2 w-full flex-1">
                          <div>
                            <div className="mt-3 text-3xl font-bold leading-8">
                              4.510
                            </div>

                            <div className="mt-1 text-base text-gray-600">
                              Item Sales
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-span-12 mt-5">
                  <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
                    <div className="bg-white p-4 shadow-lg rounded-lg">
                      <div className="flex w-full justify-between">
                        <h1 className="font-bold text-base px-6">
                          Your Coupons
                        </h1>
                        <Link href="/app/projects">
                          <a className="text-sm px-6">View All</a>
                        </Link>
                      </div>
                      <div className="mt-4">
                        <div className="flex flex-col">
                          <div className="-my-2 overflow-x-auto">
                            <div className="py-2 align-middle inline-block min-w-full">
                              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                                <table className="min-w-full divide-y divide-gray-200">
                                  <thead>
                                    <tr>
                                      <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        <div className="flex cursor-pointer">
                                          <span className="mr-2">Coupon</span>
                                        </div>
                                      </th>
                                      <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        <div className="flex cursor-pointer">
                                          <span className="mr-2">
                                            Coupon Name
                                          </span>
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                        <p>Apple MacBook Pro 13</p>
                                        <p className="text-xs text-gray-400">
                                          PC & Laptop
                                        </p>
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                        <p>77</p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppPage;
