import Service from './Service'
import servicesData from '../database/servicesData.json'


function Services() {

  return (
    <section className="why-choose-us-section">
        <h4>Why choose us</h4>
        <h2>Service we provide</h2>
        <div className="service-container">
            {servicesData.map(({serviceImage,serviceImageAlt,heading,days,time,description,instructorImage,instructorImageAlt,instructorName},index) => (
              <Service 
              serviceImage={serviceImage}
              serviceImageAlt={serviceImageAlt}
              heading={heading}
              days={days}
              time={time}
              description={description}
              instructorImage={instructorImage}
              instructorImageAlt={instructorImageAlt}
              instructorName={instructorName}
              key={index}
              />
            ))}
        </div>    
    </section>
  )
}

export default Services