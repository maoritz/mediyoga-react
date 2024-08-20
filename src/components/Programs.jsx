import programsData from '../database/programsData.json'
import Program from './Program'

{/* removed from inside element js--wp-1 */}

function Programs() {
  return (
  <section className="programs-section js--programs-section ">
      <h4>Upcoming programs</h4>
      <h2>Meditation, Yoga, Wellness <br /> & Many More</h2>
      <div className="programs-container"> 
          {programsData.map(({heading,imageSource,imageAlt,description},index) => {
            return <Program heading={heading} imageSource={imageSource} imageAlt={imageAlt} description={description} key={index}/>
          }
        )}
      </div>
  </section>
  )
}

export default Programs