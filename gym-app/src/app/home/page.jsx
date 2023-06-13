"use client";
// pages/index.js
import Calculator from "@src/components/calculator/page";

import "./home.css";

export default function Home() {
  return (
    <main className='home--main'>
      <Calculator />
      <div>
        <h1>Welcome to Our Gym Page!</h1>
        <p>Stay fit and healthy with our help for following your progress.</p>
      </div>
    </main>
  );
}
