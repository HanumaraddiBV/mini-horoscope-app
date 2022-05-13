import { InputText } from "primereact/inputtext";
import { useState } from "react";
import validator from "validator";
import "./home.css"

import { horoscopeSigns } from "../horoscopeSIgns";
export const Home = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSign, setSelectedSign] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username,email,selectedSign,selecteDate)
    let checkEmail = validator.isEmail(email)
    checkEmail? getHoroscopeData(selectedSign,selectedDate) : alert("Please enter valid Email")
  };

  const getHoroscopeData = (selectedSign,selectedDate) => {
    fetch(`https://any.ge/horoscope/api/?sign=${selectedSign}&type=daily&day=${selectedDate}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  };
  return (
    <>
      <div id="title">Horoscope App</div>
      <form id="form-data" onSubmit={handleSubmit}>
        <label htmlFor="in">Username</label>
        <InputText
          placeholder="Please enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="in">Email</label>
        <InputText placeholder="Please enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>
          Select your horoscope sign
          </label>
          <select value={selectedSign} onChange={(e)=> setSelectedSign(e.target.value)}>
            {horoscopeSigns.map((ele) => (
              <option key={ele.value} value={ele.value}>
                {ele.value}
              </option>
            ))}
          </select>
          <label>
          Select Date
          </label>
          <select value={selectedDate} onChange={(e)=> setSelectedDate(e.target.value)}>
            <option value="Today">Today</option>
            <option value="Yesterday">Yesterday</option>
            <option value="Tomorrow">Tomorrow</option>
          </select>
         <button type="submit" value="submit">Submit</button>
      </form>
    </>
  );
};
