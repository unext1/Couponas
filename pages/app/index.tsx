import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/auth";

const AppPage = ({ component, ...rest }) => {
  const { currentUser, profileUpdate } = useContext(AuthContext);

  if (!currentUser) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="max-w-7xl mx-auto p-4 sm:px-6 md:px-8">
          {currentUser?.displayName}

          <div></div>
        </div>
      </div>
    </>
  );
};

export default AppPage;
