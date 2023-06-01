'use client';


const Login = () => {
  const API_URL = process.env.API_KEY;
  console.log(API_URL)

  async function login(email, password) {
    const res = await fetch(`${API_URL}/auth/local/login`, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ email, password })
    });
    try {
      const data = await res.json()
      console.log(data.token)
      window.localStorage.setItem('token', data.token);
    } catch (error) {
      console.error('Bad Credentials')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = e.target;
    console.log(
       email.value, password.value
    )
    login(email.value, password.value)
  };

return(
<main>
  <section>
   <form onSubmit={handleSubmit}>
    <input type="email" name="email" />
    <input type="password" name="password" />
    <button type="submit" >
            Login →
          </button>
   </form>
  </section>
</main>)
};

export default Login;
