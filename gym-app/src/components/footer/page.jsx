"use client";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import "./footer.css";

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer--container'>
        <div className='footer--section'>
          <div className='footer--section'>
            <h4>Categories</h4>
            <p>Strength Training</p>
            <p>Cardio Equipment</p>
            <p>Yoga & Pilates</p>
            <p>Group Fitness</p>
          </div>
        </div>
        <div className='footer--section'>
          <h4>About Us</h4>
          <p>Our Story</p>
          <p>Contact Us</p>
          <p>Careers</p>
        </div>
        <div className='footer--section'>
          <h4>Customer Service</h4>
          <p>Help & FAQs</p>
          <p>Returns & Refunds</p>
          <p>Shipping Policy</p>
        </div>
      </div>
      <div className='footer--bottom'>
        <div className='footer--social-icons-container'>
          <h4>Follow Us</h4>
          <div>
            <AiFillFacebook />
          </div>
          <div>
            <AiFillInstagram />
          </div>
          <div>
            <AiFillTwitterSquare />
          </div>
        </div>
        <p>&copy; 2023 Gym Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
