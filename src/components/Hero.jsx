import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <header className="header js--header">
        <Navbar />
        <div className="hero-text-box row">
            <h4>Welcome to mediyoga</h4>
            <h1>Change Your Life <br className="br-header"/> By Meditation</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar scelerisque lorem, vitae euismod ante faucibus vel Integer vulputate.</p>
            <div>
                <a href="#" className="btn hero-buttons" >Sign up now</a>
                <a href="#" className="btn btn-ghost hero-buttons js--scroll-to-schedule">View Schedule</a>
            </div>
        </div>
    </header>
  )
}

export default Header