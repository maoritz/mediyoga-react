import React from 'react'
import Program from './Program'

{/* removed from inside element js--wp-1 */}

const programImages = ["mindfullness-woman","nutrition-stategies","workout-croped-min"]
const programHeading = ["Mindfulness Training","Nutrition Strategies","Workout Routines"]

function Programs() {
  return (
  <section className="programs-section js--programs-section ">
      <h4>Upcoming programs</h4>
      <h2>Meditation, Yoga, Wellness <br /> & Many More</h2>
      <div className="programs-container"> 
          {programImages.map((image,index) => {
            return <Program image={image} heading={programHeading[index]}/>
          }
        )}
      </div>
  </section>
  )
}

export default Programs