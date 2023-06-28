import React from 'react';
import "./Explore.css"

const Explore = () => {
  return (
    <section className='explore'>
        <div className='explore-main-div'>
            <img src="assets/rollsafenew.png" alt="Explore IMG"  />
            <div>
                <h2>Explore the</h2>
                <h1> hal<span style={{color:'gold'}}>o</span>sphere</h1>
                <p>An all new digital ecosystem that houses various platforms, aimed at providing solutions to day-to-day business and personal problems with ease and speed.</p>
                <button>Get Started</button>
            </div>
        </div>
    </section>
  )
}

export default Explore