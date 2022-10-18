import React from "react";

const Header = () => {
  const headerInfo = [
    {
      company: "Adam's Website",
      home: "Home",
      about: "About",
      contact: "Contact"
    }
  ];
  return (
    <div>
      {headerInfo.map((info, i) => {
        return (
          <div className="header">
            <p>{info.company}</p>
            <p>{info.home}</p>
            <p>{info.about}</p>
            <p>{info.contact}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
