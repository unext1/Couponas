import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { AppLayout } from "../components/AppLayout/index";
import { PublicLayout } from "../components/PublicLayout/index";
import app from "../firebase/firebase.config";

function MyApp({ Component, pageProps }) {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  if (loading) {
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
      {router.route.startsWith("/app") ? (
        <div>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </div>
      ) : (
        <div>
          <PublicLayout>
            <Component {...pageProps} />
          </PublicLayout>
        </div>
      )}
    </>
  );
}

export default MyApp;
