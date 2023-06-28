import React from 'react'
import "./Safety.css"

const Safety = () => {
  return (
    <section className='Safety'>
        <div>
            <div className='SafetyFirst'>
                <h1>Safety in an open world</h1>
                <p>Our competence in risk management deepens our capability in Physical Security, Electronic Security,Virtual & Cyber Security, Telematics</p>
            </div>


            <div className='SafetyFirstDiv'>
                <div className='SafetyMin'>
                    <div className='SafetySub'>
                        
                        <div className='circle-icon'>
                            <i className="fas fa-laptop"></i>
                        </div>
                        <div className='SafetyText'>
                            <h5>Cyber Security Solutions</h5>
                            <p>From real-time monitoring to advanced encryption, our solutions are tailored to meet the unique needs of your business

                            </p>
                        </div>
                    </div>
                    <div className='SafetySub'>
                        
                        <div className='circle-icon gold-bg'>
                            <i  className='fas fa-shield'></i>                            
                        </div>
                        <div className='SafetyText'>
                            <h5>Physical Security & Mobility</h5>
                            <p>Ensure the safety and security of your business's assets and personnel. Our advanced solutions provide comprehensive protection for your facilities and property.</p>
                        </div>
                    </div>
                    <div className='SafetySub'>
                        <div className='circle-icon'>
                             <i  className='fas fa-graduation-cap'></i>
                        </div>
                        <div className='SafetyText'>
                            <h5>Security Education</h5>
                            <p>Upgrade yourself with our learning platform as we shape the agenda for risk management and security practice across the industry’s value chain.</p>
                        </div>
                    </div>
                </div>

                <div className='SafetyMin'>
                    <div  className='SafetySub'>
                        <div className='circle-icon gold-bg'>
                            <i  className='fas fa-gear'></i>
                        </div>
                        <div className='SafetyText'>
                            <h5>Security Technologies</h5>
                            <p>With real-time monitoring and incident response, you can trust that your business's electronic systems and telematics data are always protected.</p>
                        </div>
                    </div>
                    <div className='SafetySub'>
                        <div className='circle-icon'>
                            <i  className='fas fa-fingerprint'></i>
                        </div>
                        <div className='SafetyText'>
                            <h5>Identity Risks & Outsourcing</h5>
                            <p>Find the right people for the job while minimizing potential risks with our talent risk outsourcing solutions.</p>
                        </div>
                    </div>
                    <div className='SafetySub'>
                        <div className='circle-icon gold-bg'>
                            <i  className='fas fa-plane-departure'></i>
                        </div>
                        <div className='SafetyText'>
                            <h5>Security Risk Advisory & Consulting</h5>
                            <p>Identify and mitigate personal and business risks with our expert analysts to address potential threats and vulnerabilities.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Safety