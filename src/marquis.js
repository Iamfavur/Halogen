import React from 'react'
import "./marquis.css"

const Marquis = () => {
  return (
    <section>
        <div className='marquis-main-div'>
            <div>
                <h1>400+</h1>
                <p>Clients across Africa partner with us</p>
            </div>
            
                <img src="assets/marguis images/total.png" alt="TOTAL IMAGE" />
                <img src="assets/marguis images/firstbank.png" alt="FIRSTBANK" />
                <img src="assets/marguis images/hb.png" alt="HERITAGEBANK" />
                <img src="assets/marguis images/polaris.png" alt="POLARIS"  className='polaris-bank display-hidden' />
                <img className="display-hidden" src="assets/marguis images/keystone.webp" alt="KEYSTONE" />
            
        </div>
    </section>
  )
}

export default Marquis;