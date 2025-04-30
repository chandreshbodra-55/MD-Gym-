import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    const handleScroll = useCallback(() => {
        setShowBackToTop(window.scrollY > 450);
    }, []);

    const scrollToTop = useCallback((behavior = 'smooth') => {
        window.scrollTo({ top: 0, behavior });
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const createLink = (to, text) => (
        <Link 
            to={to} 
            onClick={() => scrollToTop('auto')}
            className="text-white text-decoration-none mb-2"
        >
            <i className="fa fa-angle-right me-2"></i>{text}
        </Link>
    );

    return (
        <>
            <div className="footer container-fluid mt-5 py-5 px-sm-3 px-md-5 text-white">
                <div className="row pt-5">
                    <div className="footer-nav col-lg-3 col-sm-6 mb-5 ps-sm-5 ps-lg-0">
                        <h4 className="mb-4">Get In Touch</h4>
                        <p><i className="fa fa-map-marker-alt me-2"></i>Mota Varachha, Surat, 394101</p>
                        <p><i className="fa fa-phone-alt me-2"></i>+91 8849476835</p>
                        <p><i className="fa fa-envelope me-2"></i>mdgym@ac.in</p>
                    </div>

                    <div className="footer-info col-lg-3 col-sm-6 mb-5">
                        <h4 className="mb-4">Quick Links</h4>
                        <div className="d-flex flex-column justify-content-start link">
                            {createLink('/', 'Home')}
                            {createLink('/about', 'About Us')}
                            {createLink('/features', 'Our Features')}
                            {createLink('/contact', 'Contact Us')}
                        </div>
                    </div>

                    <div className="footer-info col-lg-3 col-sm-6 mb-5">
                        <h4 className="mb-4">Opening Hours</h4>
                        <h5 className="text-white">Monday - Friday</h5>
                        <p>05.00 - 19.00</p>
                        <h5 className="text-white">Saturday - Sunday</h5>
                        <p>05.00 - 11.00</p>
                    </div>
                </div>
                
                <div className="container border-top border-dark pt-5">
                    <p className="m-0 text-center text-white">
                        &copy; <Link to="/" className="text-white fw-bold text-decoration-none">MD GYM</Link> All Rights Reserved.
                    </p>
                </div>
            </div>

            {showBackToTop && (
                <button 
                    onClick={() => scrollToTop()} 
                    className="back-to-top btn"
                    aria-label="Back to top"
                >
                    <i className="fa fa-angle-double-up"></i>
                </button>
            )}
        </>
    )
}