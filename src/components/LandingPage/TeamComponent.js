/**
 * Created by Ishan on 11/27/2017.
 */
import React from 'react'
import '../../HomeView.scss'

export const TeamComponent = () => (
    <section className="team main" id="team">
        <div className="featureList">
            <div className="featureDetails">
                <div className="teamImage">
                    <img src={require('./assets/team/dhiraj.png')} title="Dhiraj Gurnani"/>
                    <h2 className="textClass">Dhiraj Gurnani</h2>
                    <p>Full Stack Software Engineer</p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/dhiraj-gurnani-ba6513a8/" target="_blank">
                            <img src={require('./assets/team/linkedin.png')} title="LinkedIn"/>
                        </a>
                        <a href="https://github.com/DhirajGurnani" target="_blank">
                            <img src={require('./assets/team/github.svg')} title="GitHub"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="featureDetails">
                <div className="teamImage">
                    <img src={require('./assets/team/ishan.png')} title="Ishan Pandya"/>
                    <h2 className="textClass">Ishan Pandya</h2>
                    <p>Full Stack Software Engineer</p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/ishan-pandya/" target="_blank">
                            <img src={require('./assets/team/linkedin.png')} title="LinkedIn"/>
                        </a>
                        <a href="https://github.com/ishan10" target="_blank">
                            <img src={require('./assets/team/github.svg')} title="GitHub"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="featureDetails">
                <div className="teamImage">
                    <img src={require('./assets/team/rishi.png')} title="Rishiraj Randive" />
                    <h2 className="textClass">Rishiraj Randive</h2>
                    <p>Android Engineer</p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/rishirandive/" target="_blank">
                            <img src={require('./assets/team/linkedin.png')} title="LinkedIn"/>
                        </a>
                        <a href="https://github.com/rishirajrandive" target="_blank">
                            <img src={require('./assets/team/github.svg')} title="GitHub"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="featureDetails">
                <div className="teamImage">
                    <img src={require('./assets/team/rahil.png')} title="Rahil Vora"/>
                    <h2 className="textClass">Rahil Vora</h2>
                    <p>Full Stack Software Engineer</p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/rahilvora/" target="_blank">
                            <img src={require('./assets/team/linkedin.png')} title="LinkedIn"/>
                        </a>
                        <a href="https://github.com/rahilvora" target="_blank">
                            <img src={require('./assets/team/github.svg')} title="GitHub"/>
                        </a>

                    </div>
                </div>
            </div>

        </div>
    </section>
);
