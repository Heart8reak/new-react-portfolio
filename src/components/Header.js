import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      {/* <h1>Header</h1>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link> */}

      <header id="header-wrap">
        {/* Navbar Start */}
        <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#main-navbar"
                aria-controls="main-navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
                <span className="icon-menu" />
                <span className="icon-menu" />
                <span className="icon-menu" />
              </button>
              <a href="index.html" className="navbar-brand">
                <img src="assets/img/logo.png" alt="" />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="main-navbar">
              <ul className="onepage-nev navbar-nav mr-auto w-100 justify-content-end clearfix">
                {/* <li className="nav-item active">
                  <a className="nav-link" href="#hero-area">
                    Home
                  </a>
                </li> */}
                <li className="nav-item nav-link">
                  <Link to="/">Home</Link>
                  {/* <a className="nav-link" href="#about">
                    About
                  </a> */}
                </li>
                <li className="nav-item nav-link">
                  <Link to="/projects">Projects</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Mobile Menu Start */}
          <ul className="onepage-nev mobile-menu">
            <li className="nav-item nav-link">
              <Link to="/">Home</Link>
              {/* <a href="#home">Home</a> */}
            </li>
            <li className="nav-item nav-link">
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
          {/* Mobile Menu End */}
        </nav>
        {/* Navbar End */}
        {/* Hero Area Start */}
        <div id="hero-area" className="hero-area-bg">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 text-center">
                <div className="contents">
                  <h5
                    className="script-font wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    Hi I am
                  </h5>
                  <h2 className="head-title wow fadeInUp" data-wow-delay="0.4s">
                    Carlos Baez
                  </h2>
                  <p className="script-font wow fadeInUp" data-wow-delay="0.6s">
                    Front-end Developer
                  </p>
                  <ul
                    className="social-icon wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
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
                  <div
                    className="header-button wow fadeInUp"
                    data-wow-delay="1s"
                  >
                    <Link className="btn btn-common" to="/projects">
                      Check out my work
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Area End */}
      </header>
    </div>
  );
}
