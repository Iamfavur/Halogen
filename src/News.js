import React from 'react'
import "./News.css"

const News = () => {
  return (
    <section className='News'>
        <div>
            <div className='news-sub-div'>
                <h3>GUIDES & NEWS</h3>
                <h1>Read the latest articles</h1>
            </div>
            
            <div className='news-mini-div'>
                <div>
                    <img src="assets/1.png" alt=""/>
                    <h3>Halogen partners FG on Cyber Security Training.</h3>
                    <p>THE OPEN WORLD OF OPPORTUNITIES AND THREATS...WHERE LIES SAFETY?</p>
                </div>                    
                <div>
                    <img src="assets/2.png" alt=""/>
                    <h3>Nigeria needs a national emergency response policy.</h3>
                    <p>A lot of companies did not envision that the Covid-19 lockdown was going to last this long and some of their sites were not properly guarded.</p>
                </div>
                <div>
                    <img src="assets/3.png" alt=""/>
                    <h3>Technology-driven Business Process is the new normal.</h3>
                    <p>The socio-economic disruptions caused by the Coronavirus pandemic have triggered a paradigm shift in security risk management,</p>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default News