"use client";
import React, { useEffect, useState } from 'react';


function profile() {
    const [userData, setUserData] = useState(null);
    const API_URL = process.env.API_KEY;
  
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
        <h1>Profile Page</h1>
        <p>Username: {userData.userName}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }

  export default profile;