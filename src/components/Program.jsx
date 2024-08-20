import React from 'react'

function Program({image,heading}) {
  return (
  <div className="program-box">
    <img src={`src/assets/images/${image}.png`} className="program-img" alt="mindfulness" />
    <h3>{heading}</h3>
    <p>Montes parturient ac natoque veniam officiis consequat tenetur etsce</p>
  </div>
  )
}

export default Program