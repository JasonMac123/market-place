import ClientContainer from "./components/containers/ClientContainer";
import NotificationContainer from "./components/containers/NotificationContainer";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import StoreNavBar from "./components/storenavbar/StoreNavBar";
import "./globals.css";
import { Inter } from "next/font/google";

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
  return (
    <html lang="en">
      <body className="bg-alice">
        <ClientContainer>
          <Header />
          <NotificationContainer />
        </ClientContainer>
        <div className="pt-44 pb-20">
          <ClientContainer>
            <StoreNavBar />
          </ClientContainer>
          {children}
        </div>
        <ClientContainer>
          <Footer />
        </ClientContainer>
      </body>
    </html>
  );
}
