import React from 'react';
import './OfficeList.css'; 

const OfficeList = () => {
  const element = "Office Space";

  const imgSrc = "https://www.exisglobal.com/wp-content/uploads/2023/03/open-closed-office-space-pros-cons.jpg";

  const offices = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "WeWork", Rent: 65000, Address: "Bangalore" },
    { Name: "Innov8", Rent: 40000, Address: "Pune" },
    { Name: "SmartWorks", Rent: 70000, Address: "Hyderabad" }
  ];

  return (
    <div>
      <h1>{element} at Affordable Range</h1>
      {offices.map((item, index) => {
        const rentColor = item.Rent <= 60000 ? 'textRed' : 'textGreen';

        return (
          <div key={index} className="office-card">
            <img src={imgSrc} alt="Office Space" width="25%" height="25%" />
            <h2>Name: {item.Name}</h2>
            <h3 className={rentColor}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default OfficeList;
