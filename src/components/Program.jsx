import React from 'react'

function Program({heading,imageSource,imageAlt,description}) {
  return (
  <div className="program-box">
    <img src={imageSource} className="program-img" alt={imageAlt} />
    <h3>{heading}</h3>
    <p>{description}</p>
  </div>
  )
}

export default Program