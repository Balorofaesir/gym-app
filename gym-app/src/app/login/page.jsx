"use client";
import { useRouter } from 'next/navigation';
import "./login.css";

const Login = () => {
  const API_URL = process.env.API_KEY;
  console.log(API_URL);
  const router = useRouter();

  async function login(email, password) {
    const res = await fetch(`${API_URL}/auth/local/login`, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ email, password }),
    });
    try {
      const data = await res.json();
      window.localStorage.setItem("token", data.token);
      alert("login Successful")
      router.push('/home');
    } catch (error) {
      alert("Bad credentials please try again" )
      console.error("Bad Credentials");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = e.target;
    login(email.value, password.value);
  };

  return (
    <section>
      <form className='login--container' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>email</label>
          <input type='email' name='email' id='email' />
        </div>
        <div>
          <label htmlFor='password'>password</label>
          <input type='password' name='password' id='password' />
        </div>
        <button type='submit'>Login →</button>
      </form>
    </section>
  );
};

export default Login;
