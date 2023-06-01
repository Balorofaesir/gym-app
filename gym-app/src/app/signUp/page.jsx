"use client"


const SignUp = () => {
    const API_URL = process.env.API_KEY;

    async function sendUser(userData) {
        const res = await fetch(`${API_URL}/api/users`, {
          method: 'POST',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          body: JSON.stringify(userData)
        });
        if (res.ok) return res.json();
        throw new Error('Email already taken!');
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { userName, email, password } = e.target;
        const userData = (
            {userName: userName.value.toLowerCase(),
        email: email.value.toLowerCase(),
        password: password.value}
        );
        console.log(userData)
        sendUser(userData)
      };
  return(
  <main>
    <form onSubmit={handleSubmit}>
        <input type="text" name="userName" required/>
        <input type="email" name="email" required/>
        <input type="password" name="password" required/>
        <button type="submit" >
            Sign Up →
          </button>
    </form>
  </main>)
  };
  
  export default SignUp;
  