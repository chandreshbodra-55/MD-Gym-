import React from 'react'

export default function Services() {
    return (
        <div id="services" className='container pb-4'>
            <div className="row align-items-center">
                <div className="col-md-6 mb-md-0 mb-4">
                    <div className="d-flex align-items-center justify-content-center about-video set-bg">
                        <a href="https://youtu.be/XhzHLS9hsfE?si=MWtoRSaukHp_b0o5" className="play-btn video-popup">
                            <i className="fa fa-caret-right"></i>
                        </a>
                    </div>
                </div>

                <div className="col-md-6 text-sm-start text-center">
                    <h4>SERVICES</h4>
                    <h2 className='text-uppercase mb-4'>what we have done</h2>
                    <p className='mb-4'>"In our gym session today, we engaged in a comprehensive strength training regimen, which involved a variety of compound exercises targeting major muscle groups throughout the body. By prioritizing proper form and technique, we ensured maximal muscle recruitment and minimized the risk of injury. Overall, our session was dedicated to pushing our physical limits and promoting overall fitness and well-being."
                    </p>
                    <div className='about-bar'>
                        <div className='body-building mb-4'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p>Body building</p>
                                <p>80%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar"></div>
                            </div>
                        </div>

                        <div className='training mb-4'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p>Training</p>
                                <p>85%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar"></div>
                            </div>
                        </div>

                        <div className='fitness'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p>Fitness</p>
                                <p>75%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
