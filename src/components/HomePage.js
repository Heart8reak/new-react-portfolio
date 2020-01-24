import React from 'react';

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>

      {/* Hero Area Start */}
      <div id="hero-area" className="hero-area-bg">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-center">
              <div className="contents">
                <h5 className="script-font wow fadeInUp" data-wow-delay="0.2s">
                  Hi I am
                </h5>
                <h2 className="head-title wow fadeInUp" data-wow-delay="0.4s">
                  Carlos Baez
                </h2>
                <p className="script-font wow fadeInUp" data-wow-delay="0.6s">
                  Front-end Developer
                </p>
                <ul className="social-icon wow fadeInUp" data-wow-delay="0.8s">
                  <li>
                    <a className="twitter" href="#">
                      <i className="icon-social-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="instagram" href="#">
                      <i className="icon-social-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="#">
                      <i className="icon-social-linkedin" />
                    </a>
                  </li>
                </ul>
                <div className="header-button wow fadeInUp" data-wow-delay="1s">
                  <a className="btn btn-common" href="/projects">
                    Check out my work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Area End */}
    </div>
  );
}
