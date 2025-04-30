import React from 'react';
import aboutPic from '../assets/image/about.jpg';

export default function About() {
  return (
    <div id="section3" className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center">
          <img
            className="img-fluid mb-4 mb-lg-0"
            src={aboutPic}
            alt="Experienced gym trainer and equipment"
          />
        </div>

        <div className="col-lg-6">
          <h2 className="display-4 mb-4 text-sm-start text-center">
            10+ Years of Experience
          </h2>
          <p className="text-sm-start text-center">
            Even with years of experience, there's always more to learn in the world of fitness. Stay open-minded and continue educating yourself through books, seminars, workshops, or working with a knowledgeable coach or trainer.
          </p>

          <div className="row py-2 text-sm-start text-center">
            <div className="col-sm-6 mb-4">
              <i className="flaticon-barbell display-2"></i>
              <h4 className="mt-2">Certified GYM Center</h4>
              <p>
                Join a certified gym community focused on healthy living and supporting each other in reaching fitness goals.
              </p>
            </div>

            <div className="col-sm-6 mb-4">
              <i className="flaticon-medal display-2"></i>
              <h4 className="mt-2">Award Winning</h4>
              <p>
                Our gym is recognized for excellence in fitness, service, and community engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
