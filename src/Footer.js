import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <section className='Footer'>
        <div>
            <div className='footer-main-div'>
                <div>
                  <img src="assets/logo2.png" alt="logo img" width="180"/>
                </div>

                <div>
                  <h1>About the Group</h1>
                  <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Why Halogen</li>
                    <li>News & Events</li>
                    <li>Gallery</li>
                    <li>Clients</li>
                  </ul>
                </div>

                <div>
                  <h1>Our Finest Solutions</h1>
                  <ul>
                    <li>Cyber Security Solutions</li>
                    <li>Electronic Solutions & Telematics</li>
                    <li>Electronic Solutions & Telematics</li>
                    <li>Identity Management</li>
                  </ul>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Footer