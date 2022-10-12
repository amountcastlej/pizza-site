import React from 'react'
import Subcontents from './Subcontents'

const Main = () => {
  return (
    <div className="main">
        <Subcontents text="Subcontents1"/>
        <Subcontents text="Subcontents2"/>
        <Subcontents text="Subcontents3"/>
    </div>
  )
}

export default Main