import React from 'react'

const Header = (props) => {
  const {company, home, about, contact} = props;

  return (
    <div className="header">
        <h2>{company}</h2>
        <ul className="navBtn">
          <li>{home}</li>
          <li>{about}</li>
          <li>{contact}</li>
        </ul>
    </div>
  )
}

export default Header