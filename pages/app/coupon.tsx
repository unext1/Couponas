import QRcode from "qrcode";
import { useState, useRef, useEffect, useContext } from "react";
import { AuthContext } from "../../components/auth";

const Coupon = () => {
  const { currentUser, logout, profileUpdate } = useContext(AuthContext);

  const [qrCode, setQrCode] = useState("");
  const [qrCodeText, setQrCodeText] = useState("");
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [recepentsEmail, setRecepentsEmail] = useState(currentUser.email);
  const [amount, setAmount] = useState();

  const [messege, setMessege] = useState();

  const redirectToCheckout = async (e) => {
    e.preventDefault();
    setRecepentsEmail(e.target.elements.receiverEmail.value);
    setAmount(e.target.amount.value);
    setMessege(e.target.message.value);

    const res = await fetch("/api/buyCoupon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: e.target.amount.value }),
    }).then((res) => res.json());

    //siusti is "/api/buyCoupon"
    // const email = await fetch("/api/sendEmail", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: e.target.receiverEmail.value,
    //     amount: e.target.amount.value,
    //     subject: "You have recieved a Q-Pong",
    //     body: `${e.target.message.value}`,
    //     url: res.url,
    //   }),
    // });

    setQrCodeText(res.url);
  };

  useEffect(() => {
    if (qrCodeText) {
      generateQrCode(qrCodeText);
      setQrCodeText(null);
    }
  }, [qrCodeText]);

  const generateQrCode = async (qrCodeText: string) => {
    try {
      const response = await QRcode.toDataURL(qrCodeText);
      setQrCode(response);
      setErrorMessage("");
    } catch (error) {
      console.log(error);
      if (error.message == "No input text") {
        setErrorMessage("Please enter something before generating qr code");
      } else {
        setErrorMessage("Error");
      }
    }
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "SEK",
  });

  return (
    <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 md:px-8">
      <h1 className="text-2xl font-semibold text-gray-900">Project</h1>
      <div className="grid grid-cols-2 sm:gap-4 sm:pt-5">
        <form
          className="col-span-2 mb-10 md:col-span-1 md:mb-0"
          onSubmit={(e) => redirectToCheckout(e)}
        >
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2">
              <label className="block font-bold text-gray-800">
                Receivers Email:
              </label>
              <input
                required
                name="receiverEmail"
                type="email"
                placeholder="Receiver Email"
                defaultValue={currentUser.email}
                className="w-full py-2 pl-3 mt-2 border border-gray-300 rounded outline-none focus:ring-indigo-600 :ring-indigo-600"
              />
            </div>
            <div className="col-span-1">
              <label className="block font-bold text-gray-800">Amount:</label>
              <input
                required
                name="amount"
                type="tel"
                value={text}
                onChange={
                  (event) => setText(event.target.value.replace(/\D/, ""))
                  // setText(event.target.value)
                }
                placeholder="$"
                className="w-full py-2 pl-3 mt-2 border border-gray-300 rounded outline-none focus:ring-indigo-600 :ring-indigo-600"
              />
            </div>
          </div>
          <div className="mt-2"></div>
          <div className="mt-2 ">
            <label className="block font-bold text-gray-800">Message:</label>
            <textarea
              name="message"
              placeholder="<3"
              className="w-full h-24 py-2 pl-3 mt-2 border border-gray-300 rounded outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
          </div>

          {/* <input
            type="submit"
            value="Generate qr"
            className="inline-flex justify-center w-full px-4 py-2 mt-5 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          /> */}
          <input
            type="submit"
            value="Generate Payment Link"
            className="inline-flex justify-center w-full px-4 py-2 mt-5 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          />
          {errorMessage && <p className="mt-2 text-red-600">{errorMessage}</p>}
        </form>

        {qrCode && (
          <div className="col-span-2 md:col-span-1 ">
            <div className="tracking-wide rounded shadow-lg">
              <div className="p-5 py-10 mb-4 bg-indigo-600 ">
                <a href={qrCode} download>
                  <img
                    className="object-cover mx-auto w-82 h-52"
                    src={qrCode}
                  />
                </a>
              </div>
              <div className="p-5 bg-white">
                <div className="flex justify-between ">
                  <h1 className="pr-5 text-lg font-bold">{recepentsEmail}</h1>
                  <h1 className="my-auto text-base">
                    {formatter.format(amount)}
                  </h1>
                </div>
                <div id="quote mt-20">
                  - <q className="italic text-gray-600">{messege}</q>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <div className="max-w-md mt-10">
        <label className="block font-bold text-gray-800">QR:</label>
        <input
          name="qr"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full py-2 pl-3 mt-2 border border-gray-300 rounded outline-none focus:ring-indigo-600 :ring-indigo-600"
        />
        <button
          className="inline-flex justify-center w-full px-4 py-2 mt-5 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => generateQrCode()}
        >
          Generate qr
        </button>
      </div> */}
    </div>
  );
};

export default Coupon;
