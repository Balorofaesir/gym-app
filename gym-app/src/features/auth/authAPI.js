const API_URL = process.env.API_KEY;


export async function login(email, password) {
  console.log("login async function tried")
    const res = await fetch(`${API_URL}/auth/local/login`, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ email, password }),
    });
    try {
      const data = await res.json();
      return data
    } catch (error) {
      console.error("Bad Credentials");
    }
  }