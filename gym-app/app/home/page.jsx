"use client"
// pages/index.js

import { useState } from 'react';
import Link from "next/link";


export default function Home() {
  const [met, setMet] = useState("");
  const [duration, setDuration] = useState("");
  const [weight, setWeight] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  function calculateCaloriesBurned() {
    // Calculate the total calories burned (MET * weight * duration in hours)

    const calories = met * weight * (duration/60);
    console.log(weight)
    // Return the calculated calories burned
    setCaloriesBurned(calories);
  }
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link href='/'>
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
          </ul>
        </nav>
      </header>

      <div>
        <h1>Welcome to Our Gym Page!</h1>
        <p>Stay fit and healthy with our help for following your progress.</p>
      </div>
      <div>
        <h1>Calorie Calculator</h1>

        <div>
          <label>
            MET value:
            <input
              type='number'
              value={met}
              onChange={(e) => setMet(parseFloat(e.target.value))}
            />
          </label>
        </div>

        <div>
          <label>
            Duration (minutes):
            <input
              type='number'
              value={duration}
              onChange={(e) => setDuration(parseFloat(e.target.value))}
            />
          </label>
        </div>
        <div>
          <label>
            Weight (Kg):
            <input
              type='number'
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
            />
          </label>
        </div>

        <button onClick={calculateCaloriesBurned}>Calculate</button>
        <p>{caloriesBurned}</p>

        {caloriesBurned > 0 && (
          <div>
            <h2>Calories Burned:</h2>
            <p>{caloriesBurned} calories</p>
          </div>
        )}
      </div>
      <footer>
        <p>&copy; {new Date().getFullYear()} Gym Page. All rights reserved.</p>
      </footer>
    </div>
  );
}
