import React from "react";

const Form = () => {
  const footerInfo = [
    {
      copyright: "Copyright: 2022 Adam Joines",
      site: "www.seinstitute.com",
      gh: "amountcastlej"
    }
  ];

  return (
    <div>
      {footerInfo.map((info, i) => {
        return (
          <div className="footer">
            <p>{info.copyright}</p>
            <p>{info.site}</p>
            <p>{info.gh}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Form;
