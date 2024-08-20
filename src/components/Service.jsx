import React from 'react'


function Service({serviceImage,serviceImageAlt,heading,days,time,description,instructorImage,instructorImageAlt,instructorName}) {
  return (
    <div className="service-box">
      <img src={`${serviceImage}`} className="service-img" alt={`${serviceImageAlt}`} />
      <h3>{heading}</h3>
      <span>{days} ({time})</span>
      <p>{description}</p>
      <div className="instructor-profile">
          <cite>
              <img src={`${instructorImage}`} alt={`${instructorImageAlt}`} />
              {instructorName}     
          </cite>
          <a href="#" className="btn">Book Now</a>
      </div>
    </div>
  )
}

export default Service