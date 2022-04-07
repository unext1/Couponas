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
        <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Scanner</h1>
        </div>
        <div className="flex justify-center mx-auto mt-10 max-w-md">
          <QrReader
            delay={500}
            onError={handleErrorCam}
            onScan={handleScanCam}
            facingMode="rear"
            style={{ transform: "scaleX(-1)" }}
            className="border-4 border-indigo-600 shadow "
          />
        </div>
        {camResults && (
          <div className="mt-5">
            <h1 className="text-3xl font-bold text-center">{camResults}</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Scanner;
