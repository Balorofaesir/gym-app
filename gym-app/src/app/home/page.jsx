"use client";
// pages/index.js
import Calculator from "@src/components/calculator/page";
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link href='/'>
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link href='/signUp'>
                <p>SignUp</p>
              </Link>
            </li>
            <li>
              <Link href='/login'>
                <p>Login</p>
              </Link>
            </li>
          </ul>
          <Calculator />
        </nav>
      </header>
      <div>
        <h1>Welcome to Our Gym Page!</h1>
        <p>Stay fit and healthy with our help for following your progress.</p>
      </div>
     
      <footer>
        <p>&copy; {new Date().getFullYear()} Gym Page. All rights reserved.</p>
      </footer>
    </div>
  );
}
