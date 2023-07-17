"use client";
import Link from "next/link";
import "./header.css";
import { useRouter } from "next/navigation";
import { GiMuscleUp } from "react-icons/gi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectAuth, setAuthUser } from "@src/features/auth/authSlice";

export default function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuth, token, profile } = useSelector(selectAuth);

  useEffect(() => {
    const storedAuth = sessionStorage.getItem("isAuth");
    if (storedAuth) {
      dispatch(setAuthUser({ isAuth: storedAuth }));
    }
  }, [dispatch]);

  const handleRemoveLogin = () => {
    dispatch(logout());
    sessionStorage.clear();
    router.push("/login");
  };
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
            {isAuth ? (
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
