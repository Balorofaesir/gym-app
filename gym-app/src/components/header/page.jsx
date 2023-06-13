"use client";
import Link from "next/link";
import "./header.css";
import { GiMuscleUp } from "react-icons/gi";

export default function Header() {
  return (
    <header className='header'>
      <section>
        <p className='header--section__tittle'>Hercules</p>
        <p className='header--section__icon-image'>
          <GiMuscleUp />
        </p>
      </section>
      <nav className='header--nav'>
        <ul>
          <li>
            <Link href='/home'>
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
      </nav>
      <section className="header--section">
        <p className="header--section__slogan">The smartest way to be stronger</p>
        </section>
    </header>
  );
}
