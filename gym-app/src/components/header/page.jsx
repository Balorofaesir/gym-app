"use client";
import Link from "next/link";
import "./header.css";
import { GiMuscleUp } from "react-icons/gi";
import { useState, useEffect } from "react";

export default function Header() {
const [token, setToken] = useState("")

useEffect(() => {
  const tokenVariable = localStorage.getItem("token")
  setToken(tokenVariable)
}, [])

  const handleRemoveLogin = () => {
    window.localStorage.removeItem("token");
    setToken("")
  };
console.log(token)

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
          <div>
          {
          token !== "" ? (
        // Render content when the token value matches 'some_value'
        <button
        type='Button'
        onClick={handleRemoveLogin}
        className='header--nav__LogOut'
      >
        Log Out
      </button>
      ) : (
        <p>Not user Logged</p>
      )}
        
          </div>
        </ul>
      </nav>
      <section className='header--section'>
        <p className='header--section__slogan'>
          The smartest way to be stronger
        </p>
      </section>
    </header>
  );
}
