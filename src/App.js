import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { HoroscopeCard } from "./components/HoroscopeCard.jsx";
import { useContext, useState } from "react";
import { HoroscopeContext } from "./context/HoroscopeContextProvider";

function App() {
  const { isSubmit } = useContext(HoroscopeContext);
  console.log("isSubmit:", isSubmit);
  return (
    <div className="App">
    {!isSubmit && <Home />}
      {isSubmit && <HoroscopeCard />} 
    </div>
  );
}

export default App;
