import React from 'react'

function Navbar() {
  return (
  <nav >
      <div className="row">
          <div className="logo">Mediyoga</div>
          <a className="mobile-nav-button js--nav-icon"><ion-icon className="mobile-nav-icon" name="menu"></ion-icon></a>
          <ul className="main-nav js--main-nav">
              <li><a href="#" className="js--scroll-to-header" >Welcome</a></li>
              <li><a href="#" className="js--scroll-to-programs">Programs</a></li>
              <li><a href="#" className="js--scroll-to-about-us">About us</a></li>
              <li><a href="#" className="js--scroll-to-team">Our team</a></li>
              <li><a href="#" className="js--scroll-to-pricing">Plans</a></li>
              <li><a href="#"><ion-icon name="cart"></ion-icon></a></li>
              <li><a href="#"><ion-icon name="search-sharp"></ion-icon></a></li>
          </ul>
      </div>
  </nav>
  )
}

export default Navbar