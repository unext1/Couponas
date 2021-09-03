import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
