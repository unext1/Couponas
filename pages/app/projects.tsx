import QRcode from "qrcode";
import QrReader from "react-qr-scanner";
import { useState, useRef } from "react";

const Projects = () => {
  const [qrCode, setQrCode] = useState();
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [camResults, setCamResults] = useState();
  const qrRef = useRef(null);

  const generateQrCode = async () => {
    try {
      const response = await QRcode.toDataURL(text);
      console.log(response);
      setQrCode(response);
      setErrorMessage("");
    } catch (error) {
      console.log(error.message);
      if (error.message == "No input text") {
        setErrorMessage("Please enter something before generating qr code");
      }
    }
  };

  const handleErrorCam = (error) => {
    console.log("errorororo");
  };

  const handleScanCam = (result) => {
    if (result) {
      setCamResults(result.text);
    }
  };

  return (
    <div>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Project</h1>
        </div>
        <div className="max-w-7xl mx-auto p-4 sm:px-6 md:px-8">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="QrCode"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Your Qr Code
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                name="QrCode"
                type="QrCode"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="max-w-lg block w-full py-1 shadow-sm pl-2 focus:ring-blue-600  outline-none focus:border-blue-600 sm:max-w-xs sm:text-sm border-2 border-gray-300 rounded-md"
              />
              {errorMessage && (
                <p className="text-red-600 mt-2">{errorMessage}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            value="Submit"
            onClick={() => generateQrCode()}
            className="mt-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Generate qr
          </button>
          {qrCode && (
            <a href={qrCode} download>
              <img className="mt-5 w-52 h-52 object-cover" src={qrCode} />
            </a>
          )}
        </div>
        <h1>QR CODE WEB</h1>
        <QrReader
          facingMode="rear"
          style={{ width: "40%" }}
          onError={handleErrorCam}
          onScan={handleScanCam}
        />
        <h1>Scanned by Cam code: {camResults && camResults}</h1>
      </div>
    </div>
  );
};

export default Projects;
