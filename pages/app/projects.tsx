import QRcode from "qrcode";
import QrReader from "react-qr-scanner";
import { useState, useRef, useEffect } from "react";

const Projects = () => {
  const [qrCode, setQrCode] = useState();
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [camResults, setCamResults] = useState();
  const [recepentsName, setRecepentsName] = useState();
  const [recepentsEmail, setRecepentsEmail] = useState();
  const [amount, setAmount] = useState();

  const [messege, setMessege] = useState();

  const generateQrCode = async () => {
    try {
      const response = await QRcode.toDataURL(text);
      setQrCode(response);
      setErrorMessage("");
    } catch (error) {
      console.log(error.message);
      if (error.message == "No input text") {
        setErrorMessage("Please enter something before generating qr code");
      } else {
        setErrorMessage("Error");
      }
    }
  };

  const handleErrorCam = (error) => {
    console.log("errorororo");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    generateQrCode();
    setRecepentsEmail(e.target.elements.recepentsEmail.value);
    setRecepentsName(e.target.elements.recepentsName.value);
    setAmount(e.target.amount.value);
    setMessege(e.target.message.value);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
      <h1 className="text-2xl font-semibold text-gray-900">Project</h1>
      <div className="grid grid-cols-2 sm:gap-4 sm:pt-5">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2">
              <label className="block text-gray-800 font-bold">
                Recepents Name:
              </label>
              <input
                type="text"
                name="recepentsName"
                placeholder="Recepents Name"
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-800 font-bold">Amount:</label>
              <input
                name="amount"
                type="tel"
                value={text}
                onChange={
                  (event) => setText(event.target.value.replace(/\D/, ""))
                  // setText(event.target.value)
                }
                placeholder="$"
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              />
            </div>
          </div>
          <div className="mt-2">
            <label className="block text-gray-800 font-bold">
              Recepents Email:
            </label>
            <input
              name="recepentsEmail"
              type="email"
              placeholder="RecepentsEmail"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
          </div>
          <div className="mt-2 ">
            <label className="block text-gray-800 font-bold">Message:</label>
            <textarea
              name="message"
              placeholder="<3"
              className="w-full border border-gray-300 py-2 pl-3 h-24 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
          </div>

          <input
            type="submit"
            value="Generate qr"
            className="mt-5 inline-flex justify-center py-2 px-4 w-full border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          />
          {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
        </form>
        {qrCode && (
          <div className="mt-8 mx-auto">
            <div className="max-w-sm bg-white p-5 rounded-md tracking-wide shadow-lg">
              <div className="mb-4">
                <a href={qrCode} download>
                  <img
                    className="w-82 mx-auto h-52 object-cover"
                    src={qrCode}
                  />
                </a>
              </div>
              <div className="flex justify-between">
                <h1 className="text-lg font-bold pr-5">{recepentsName}</h1>
                <h1 className="text-base my-auto">
                  {formatter.format(amount)}
                </h1>
              </div>
              <div id="quote mt-10">
                - <q className="italic text-gray-600">{messege}</q>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <h1>QR CODE WEB</h1>
        {mounted && (
          <QrReader
            delay={500}
            onError={handleErrorCam}
            onScan={handleScanCam}
          />
        )}
        <h1>Scanned by Cam code: {camResults && camResults}</h1> */}
    </div>
  );
};

export default Projects;
