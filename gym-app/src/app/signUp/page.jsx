"use client";
import "./signUp.css";

const SignUp = () => {
  const API_URL = process.env.API_KEY;

  async function sendUser(userData) {
    const res = await fetch(`${API_URL}/api/users`, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(userData),
    });
    if (res.ok) {
      alert("Sign Up Successful");
      window.location.href = "/login";
      return res.json();
    }
    throw new Error("Email already taken!");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userName, email, password } = e.target;
    const userData = {
      userName: userName.value.toLowerCase(),
      email: email.value.toLowerCase(),
      password: password.value,
    };
    sendUser(userData);
  };
  return (
    <form className='signUp--container' onSubmit={handleSubmit}>
      <div>
        <label htmlFor='userName'> user name </label>
        <input type='text' name='userName' id='userName' required />
      </div>
      <div>
        <label htmlFor='email'>email </label>
        <input type='email' name='email' id='email' required />
      </div>
      <div>
        <label htmlFor='password'>password </label>
        <input type='password' name='password' id='password' required />
      </div>
      <div>
        <label htmlFor='weight'>weight &#40; Kg &#41; </label>
        <input
          type='number'
          name='weight'
          id='weight'
          min='0'
          max='700'
          required
        />
      </div>
      <div>
        <label htmlFor='password'>height &#40; M &#41; </label>
        <input
          type='number'
          name='height'
          id='height'
          min='0'
          max='3'
          placeholder='1.50'
          step='0.01'
          lang="en" 
          required
        />
      </div>
      <button type='submit'>Sign Up →</button>
    </form>
  );
};

export default SignUp;
