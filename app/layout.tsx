import ClientContainer from "./components/ClientContainer";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import firebase_app from "./firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Look of Japan",
  description: "Unique souvenirs from all over Japan!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = getAuth(firebase_app);
  const [user, loading, error] = useAuthState(auth);

  return (
    <html lang="en">
      <body>
        <ClientContainer>
          <NavBar />
          <div className="pt-44 pb-20">{children}</div>
          <Footer />
        </ClientContainer>
      </body>
    </html>
  );
}
