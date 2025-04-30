import React from 'react'
import testimonial1 from '../assets/image/testimonial-1.jpg'
import testimonial2 from '../assets/image/testimonial-2.jpg'
import testimonial3 from '../assets/image/testimonial-3.jpg'

export default function Testimonial() {

    const myStyle = {

        minHeight: '450px'

    };

    return (
        <div id="testimonial" className="container-fluid-lg position-relative my-5">
            <div className="container-lg">
                <div className="row px-lg-3 align-items-center">
                    <div className="col-md-6 bg-secondary">
                        <div className="d-flex align-items-center px-3" style={myStyle}>
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <div className="d-flex align-items-center mb-4 text-white">
                                            
                                            
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="d-flex align-items-center mb-4 text-white">
                                           
                                            <div className="ps-4">
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="carousel-item">
                                        <div className="d-flex align-items-center mb-4 text-white">
                                            
                                           
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ps-md-3 d-none d-md-block">
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
