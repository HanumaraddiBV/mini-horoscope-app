import React, { useContext, useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { Markup } from "interweave";
import "./HomeCard.css"
import { HoroscopeContext } from "../context/HoroscopeContextProvider";
export const HoroscopeCard = (props) => {
  const { horoscopeData, setIsSubmit } = useContext(HoroscopeContext);
  const [isDate, setDate] = useState(false);
  const compareDates =(d1) =>{
    const date1 = new Date(d1);
    const date2 = new Date();
     
    date1.getTime() > date2.getTime()? setDate(true): setDate(false)
    
}
useEffect(() => {
  compareDates(horoscopeData.date);
 
}, [isDate])

  const header = (
    <img
      alt="Card"
      src="https://media.istockphoto.com/photos/zodiac-signs-inside-of-horoscope-circle-on-universe-astrology-and-picture-id1314617035?b=1&k=20&m=1314617035&s=170667a&w=0&h=z12TL1WzdElnV1RNfLLIUn0L6x6cuBP24QT8lMAQYTw="
      style={{ width: "100%", height: "200px" }}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const footer = (
    
    <span>
      <Button
        label="Back"
        icon="pi pi-check"
        onClick={() => setIsSubmit(false)}
      />
    </span>
  );
  return (
    <div className="container-card">
      <Card
      className="card"
        title={horoscopeData.username}
        subTitle={horoscopeData.email}
        style={{ width: "35em", height: "680px"}}
        footer={footer}
        header={header}
      >
        <p className="m-0" style={{ lineHeight: "1",textAlign: "justify", backgroundColor: isDate? "#9e9db1": "none" }}>
        <Markup content={horoscopeData.text}/>
         
        </p>
        <p style={{left: "10px"}}>{horoscopeData.date}</p>
      </Card>
    </div>
  );
};
