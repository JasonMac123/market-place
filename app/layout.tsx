import ClientContainer from "./components/containers/ClientContainer";
import NotificationContainer from "./components/containers/NotificationContainer";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import StoreNavBar from "./components/storenavbar/StoreNavBar";
import "./globals.css";

import { Playfair_Display } from "next/font/google";
import { Lato } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: "400",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "400",
});

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
      <body className={`${playfair.variable} ${lato.variable} bg-alice`}>
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
