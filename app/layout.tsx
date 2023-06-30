import ClientContainer from "./components/ClientContainer";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
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
          <NavBar />
          <div className="pt-44 pb-20">{children}</div>
          <Footer />
        </ClientContainer>
      </body>
    </html>
  );
}
