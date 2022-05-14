import { InputText } from "primereact/inputtext";
import { useContext, useState } from "react";
import validator from "validator";
import "./home.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import PropTypes from "prop-types";
import { Button } from "primereact/button";
import { horoscopeSigns } from "../horoscopeSIgns";

import { HoroscopeContext } from "../context/HoroscopeContextProvider";
export const Home = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSign, setSelectedSign] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [horoscopeDetails, setHoroscopeDetails] = useState({});
  const { handleData, setIsSubmit } = useContext(HoroscopeContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    let checkEmail = validator.isEmail(email);
    if (!username) {
      alert("Please enter your name");
    } else if (!checkEmail) {
      alert("Please enter valid Email");
    } else {
      getHoroscopeData(selectedSign, selectedDate);
    }
  };

  const getHoroscopeData = (selectedSign, selectedDate) => {
    fetch(
      `https://any.ge/horoscope/api/?sign=${selectedSign}&type=daily&day=${selectedDate}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data:", data);
        let allData = {};
        data.forEach((e) => {
          allData.text = e.text;
          allData.date = e.date;
        });
        // console.log('allData:', allData)
        setHoroscopeDetails(allData);
        setIsSubmit(true);

        handleData(username, email, allData);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div id="main-container">
      <div id="title">Horoscope App</div>
      <form id="form-data" onSubmit={handleSubmit}>
        <label htmlFor="in">Username</label>
        <InputText
          placeholder="Please enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="in">Email</label>
        <InputText
          placeholder="Please enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Select your horoscope sign</label>
        <select
          value={selectedSign}
          onChange={(e) => setSelectedSign(e.target.value)}
        >
          {horoscopeSigns.map((ele) => (
            <option key={ele.value} value={ele.value}>
              {ele.value}
            </option>
          ))}
        </select>
        <label>Select Date</label>
        <select
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        >
          <option value="Today">Today</option>
          <option value="Yesterday">Yesterday</option>
          <option value="Tomorrow">Tomorrow</option>
        </select>

        <Button
          type="submit"
          value="submit"
          label="Submit"
          className="p-button-raised"
        />
      </form>
    </div>
  );
};

Home.propTypes = {
  username: PropTypes.string,

  selectedSign: PropTypes.string,
  selectedDate: PropTypes.string,
};
