import React from 'react';

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
              {/* <a href="/" className="navbar-brand">
                <img src="assets/img/logo.png" alt="" />
              </a> */}
            </div>
            <div className="collapse navbar-collapse" id="main-navbar">
              <ul className="onepage-nev navbar-nav mr-auto w-100 justify-content-end clearfix">
                {/* <li className="nav-item active">
                  <a className="nav-link" href="#hero-area">
                    Home
                  </a>
                </li> */}
                <li className="nav-item nav-link">
                  <a className="smoothscroll" href="/">
                    Home
                  </a>
                  {/* <a className="nav-link" href="#about">
                    About
                  </a> */}
                </li>
                <li className="nav-item nav-link">
                  <a href="/projects">Projects</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Mobile Menu Start */}
          <ul className="onepage-nev mobile-menu">
            <li className="nav-item nav-link">
              <a href="/">Home</a>
              {/* <a href="#home">Home</a> */}
            </li>
            <li className="nav-item nav-link">
              <a href="/projects">Projects</a>
            </li>
          </ul>
          {/* Mobile Menu End */}
        </nav>
        {/* Navbar End */}
      </header>
    </div>
  );
}
