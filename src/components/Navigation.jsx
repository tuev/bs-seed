import React from "react";

const Navigation = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark d-none d-lg-block"
      style={{ zIndex: 2000 }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand nav-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://mdbootstrap.com/docs/standard/"
        >
          <strong>MDB</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link" aria-current="page" href="#intro">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn Bootstrap 5
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://mdbootstrap.com/docs/standard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download MDB UI KIT
              </a>
            </li>
          </ul>

          <ul className="navbar-nav list-inline">
            <li className="">
              <a
                className="nav-link"
                href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li className="">
              <a
                className="nav-link"
                href="https://www.facebook.com/mdbootstrap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://twitter.com/MDBootstrap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/mdbootstrap/mdb-ui-kit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
