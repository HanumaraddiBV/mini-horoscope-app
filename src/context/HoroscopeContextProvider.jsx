import { createContext, useState } from "react";

export const HoroscopeContext = createContext();

export const HoroscopeContextProvider = ({ children }) => {
  const [horoscopeData, setHoroscopeData] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleData = (username, email, allData) => {
    setHoroscopeData({
      username,
      email,
      text: allData.text,
      date: allData.date,
    });
  };
  return (
    <HoroscopeContext.Provider
      value={{ horoscopeData, handleData, setIsSubmit, isSubmit }}
    >
      {children}
    </HoroscopeContext.Provider>
  );
};
