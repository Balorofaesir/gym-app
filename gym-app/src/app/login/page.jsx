"use client";
import "./login.css";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { loginActionAsync } from "../../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = e.target;
    console.log(email.value, password.value);
    try {
      const action = loginActionAsync({
        email: email.value,
        password: password.value,
      });
      const { payload } = await dispatch(action);
      const { token } = payload;

      console.log(payload);
      window.localStorage.setItem("token", token);
      window.localStorage.setItem("auth", JSON.stringify(payload));
      window.localStorage.setItem("isAuth", true);
      alert("LOGIN OK")
      router.push("/profile");
    } catch (error) {
      console.error("Login Error Bad Credentials");
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("auth");
      window.localStorage.removeItem("isAuth");
      alert(`Bad Credentials`);
    }
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
