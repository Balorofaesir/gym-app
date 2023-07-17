"use client"
import { useEffect } from "react";
import { Provider } from "react-redux";
import { Inter } from "next/font/google";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import "../styles/globals.css";
import store from "../services/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    // Any initialization logic you want to perform can go here
  }, []);
  return (
    <html lang='en'>
      {/* <div><p>hello</p></div> */}
      <Provider store={store}>
        <div className={inter.className}>
          <Header />
          {children}
          <Footer />
        </div>
      </Provider>
    </html>
  );
}
