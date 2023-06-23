"use client";
// pages/index.js
import "./calculator.css";

import { useState, useEffect } from "react";

export default function Calculator() {
  const API_URL = process.env.API_KEY;
  const [data, setData] = useState(null);
  const [met, setMet] = useState("");
  const [duration, setDuration] = useState("");
  const [weight, setWeight] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  const calculateCaloriesBurned = () => {
    // Calculate the total calories burned (MET * weight * duration in hours)

    const calories = met * weight * (duration / 60);
    console.log(weight);
    // Return the calculated calories burned
    setCaloriesBurned(calories);
  };
  const handleMetValue = (e) => {
    setMet(e.target.value);
    console.log(e.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/api/activities`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const registerMyBurnedCalories = async () => {
    const token = localStorage.getItem("token");
    const payload = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        myWeight: [
          {
            CaloriesBurned: caloriesBurned,
            date: new Date(),
          },
        ],
      }),
    };
    try {
      const response = await fetch(
        `${API_URL}/api/users/add/myWeight`,
        payload
      );
      const data = await response.json();
      console.log(data);
      // alert("Calories Burned Registered")
    } catch (err) {
      console.error(err);
      alert("Calories Registration failed");
    }
  };

  return (
    <section className='calculator--container'>
      <h1>Calories Calculator</h1>
      <div className='calculator--div'>
        <label>Met Value activity list:</label>
        <select className={"calculator--div__select"} onChange={handleMetValue}>
          {data &&
            data.map((data) => (
              <option value={data.met} key={data._id}>
                {data.name}
                {/* <p>{data.met} </p> */}
              </option>
            ))}
        </select>
      </div>
      <div className='calculator--div'>
        <label>MET value:</label>
        <input
          type='number'
          value={met}
          onChange={(e) => setMet(parseFloat(e.target.value))}
        />
      </div>

      <div className='calculator--div'>
        <label>Duration (minutes):</label>{" "}
        <input
          type='number'
          value={duration}
          onChange={(e) => setDuration(parseFloat(e.target.value))}
        />
      </div>
      <div className='calculator--div'>
        <label>Weight (Kg):</label>{" "}
        <input
          type='number'
          value={weight}
          onChange={(e) => setWeight(parseFloat(e.target.value))}
        />
      </div>

      <button onClick={calculateCaloriesBurned}>Calculate</button>
      {caloriesBurned > 0 && (
        <div className='calculator--div2'>
          <h1>Calories Burned:</h1>
          <p>{caloriesBurned} calories</p>
          <button className='button' onClick={registerMyBurnedCalories}>
            {" "}
            Register Calories burned
          </button>
        </div>
      )}
    </section>
  );
}
