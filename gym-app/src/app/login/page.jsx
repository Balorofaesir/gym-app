"use client";
import "./login.css";
import { useDispatch } from "react-redux";
import { loginActionAsync } from '../../features/auth/authSlice';


const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = e.target;
    console.log(email.value, password.value)
    try {
      const action = loginActionAsync({
        email: email.value,
        password: password.value,
      });
      const { payload } = await dispatch(action);
      console.log(payload)

      const { token } = payload;
      window.localStorage.setItem('token', token);
      window.localStorage.setItem('auth', JSON.stringify(payload));
      window.localStorage.setItem('isAuth', true);
    } catch (error) {console.error("login error")
      
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
