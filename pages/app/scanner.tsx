import QrReader from "react-qr-scanner";
import { useState } from "react";

const Scanner = () => {
  const [camResults, setCamResults] = useState();

  const handleErrorCam = (error) => {
    console.log("Error");
  };

  const handleScanCam = (result) => {
    if (result) {
      setCamResults(result?.text);
    }
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "SEK",
  });

  return (
    <>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Scanner</h1>
        </div>
        <div className="mt-10 mx-auto   flex justify-center">
          <QrReader
            delay={500}
            onError={handleErrorCam}
            onScan={handleScanCam}
            style={{ transform: "scaleX(-1)" }}
            className="shadow border-4 border-indigo-600 "
          />
        </div>
        {camResults && (
          <div className="mt-5">
            <h1 className="text-3xl text-center font-bold">
              {formatter.format(camResults)}
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Scanner;
