import React from 'react'

function Schedule() {
  return (
    <section className="schedule-section js--Schedule-section">
    <h4>Schedule</h4>
    <h2>Classes time table</h2>
    <ul className="schedule-nav">
      <li className="schedule-nav-item"><a href="#">All</a></li>
      <li className="schedule-nav-item"><a href="#">Body Balance</a></li>
      <li className="schedule-nav-item"><a href="#">Core Training</a></li>
      <li className="schedule-nav-item"><a href="#">Crossfit Training</a></li>
      <li className="schedule-nav-item"><a href="#">Running</a></li>
      <li className="schedule-nav-item"><a href="#">Stretching</a></li>
    </ul>
    <div className="schedule-container row">
      <div className="schedule-item days-row gray-background"></div>
      <div className="schedule-item days-row gray-background">Monday</div>
      <div className="schedule-item days-row gray-background">Tuesday</div>
      <div className="schedule-item days-row gray-background">Wednesday</div>
      <div className="schedule-item days-row gray-background">Thursday</div>
      <div className="schedule-item days-row gray-background">Friday</div>
      <div className="schedule-item days-row gray-background">Saturday</div>
      <div className="schedule-item days-row gray-background">Sunday</div>
      <div className="schedule-item hours-column">10:00</div>
      <div className="schedule-item hours-row">Breath<br /> <div>10:00 - 11:00</div></div>
      <div className="schedule-item hours-row">Movement<br /> <div>10:00 - 11:00</div></div>
      <div className="schedule-item hours-row">Silent<br /> <div>10:00 - 11:00</div></div>
      <div className="schedule-item hours-row">Walking<br /> <div>10:00 - 11:00</div></div>
      <div className="schedule-item hours-row"></div>
      <div className="schedule-item hours-row">Breath<br /> <div>10:00 - 11:00</div></div>
      <div className="schedule-item hours-row">Nature<br /> <div>10:00 - 11:00</div></div>
      <div className="schedule-item hours-column gray-background">11:00</div>
      <div className="schedule-item hours-row gray-background">Movement<br /> <div>11:00 - 12:00</div></div>
      <div className="schedule-item hours-row gray-background">Silent<br /> <div>11:00 - 12:00</div></div>
      <div className="schedule-item hours-row gray-background">Breath<br /> <div>11:00 - 12:00</div></div>
      <div className="schedule-item hours-row gray-background"></div>
      <div className="schedule-item hours-row gray-background">Breath<br /> <div>11:00 - 12:00</div></div>
      <div className="schedule-item hours-row gray-background">Movement<br /> <div>11:00 - 12:00</div></div>
      <div className="schedule-item hours-row gray-background">Walking<br /> <div>11:00 - 12:00</div></div>
      <div className="schedule-item hours-column">04:00</div>
      <div className="schedule-item hours-row">Silent<br /> <div>04:00 - 05:00</div></div>
      <div className="schedule-item hours-row">Breath<br /> <div>04:00 - 05:00</div></div>
      <div className="schedule-item hours-row">Walking<br /> <div>04:00 - 05:00</div></div>
      <div className="schedule-item hours-row">Breath<br /> <div>04:00 - 05:00</div></div>
      <div className="schedule-item hours-row">Movement<br /> <div>04:00 - 05:00</div></div>
      <div className="schedule-item hours-row"></div>
      <div className="schedule-item hours-row">Awareness<br /> <div>04:00 - 05:00</div></div>
      <div className="schedule-item hours-column gray-background">05:00</div>
      <div className="schedule-item hours-row gray-background">Walking<br /> <div>05:00 - 06:00</div></div>
      <div className="schedule-item hours-row gray-background">Silent<br /> <div>05:00 - 06:00</div></div>
      <div className="schedule-item hours-row gray-background">Breath<br /> <div>05:00 - 06:00</div></div>
      <div className="schedule-item hours-row gray-background">Awareness<br /> <div>05:00 - 06:00</div></div>
      <div className="schedule-item hours-row gray-background"></div>
      <div className="schedule-item hours-row gray-background">Breath<br /> <div>05:00 - 06:00</div></div>
      <div className="schedule-item hours-row gray-background">Movement<br /> <div>05:00 - 06:00</div></div>
    </div>
  </section>
  )
}

export default Schedule