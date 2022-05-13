import React, { useContext, useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { Markup } from "interweave";
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
      src="https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
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
    <div>
      <Card
      
        title={horoscopeData.username}
        subTitle={horoscopeData.email}
        style={{ width: "35em", height: "650px"}}
        footer={footer}
        header={header}
      >
        <p className="m-0" style={{ lineHeight: "1",textAlign: "justify", backgroundColor: isDate? "#9e9db1": "none" }}>
        <Markup content={horoscopeData.text}/> </p>
      </Card>
    </div>
  );
};
