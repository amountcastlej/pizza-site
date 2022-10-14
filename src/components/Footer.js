import React from 'react'

const Footer = (props) => {
  const {copyright, site, gh, linkedIn} = props;

  return (
    <div className="footer">
      <h3>{copyright}</h3>
      <ul className="footBtn">
        <li>{site}</li>
        <li>Github / LinkedIn: {gh}</li>
      </ul>
    
    </div>
  )
}

export default Footer