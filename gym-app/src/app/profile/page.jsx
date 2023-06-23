"use client";
import React, { useEffect, useState } from "react";
import bcrypt from 'bcryptjs';

function profile() {
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState(null);
  const [age, setAge] = useState(null);
  const [password, setPassword] = useState(null);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);

  const API_URL = process.env.API_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const response = await fetch(`${API_URL}/api/users/edit/me`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          password: hashedPassword,
          weight,
          height,
          age,
        }),
      });

      const data = await response.json();

      console.log(data); // Handle the server response as needed

      // Reset the form fields after successful editing
      setUserName(null);
      setAge(null);
      setPassword(null);
      setHeight(null);
      setWeight(null);
    } catch (error) {
      console.error("patch error");
      // Handle HTTP request errors
    }
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(`${API_URL}/api/users/me`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });

        if (res.ok) {
          const data = await res.json();
          setUserData(data);
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <p>Loading user data...</p>;
  }

  return (
    <div>
      <div>
        <h1>Profile Page</h1>
        <p>Username: {userData.userName}</p>
        <p>Email: {userData.email}</p>
        <p>age: {userData.age}</p>
        <p>height: {userData.height}</p>
        <p>weight: {userData.weight}</p>
      </div>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="number"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
           <div>
        <label htmlFor='weight'>weight &#40; Kg &#41; </label>
        <input
          type='number'
          name='weight'
          id='weight'
          min='0'
          max='700'
          onChange={(e) => setWeight(e.target.value)}
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
          onChange={(e) => setHeight(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save</button>
    </form>
    </div>
  );
}

export default profile;
