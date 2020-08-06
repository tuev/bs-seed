import React from "react";

const Carousel = () => {
  return (
    <div
      id="introCarousel"
      className="carousel slide carousel-fade shadow-2-strong"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li data-target="#introCarousel" data-slide-to="0" className=""></li>
        <li data-target="#introCarousel" data-slide-to="1" className=""></li>
        <li
          data-target="#introCarousel"
          data-slide-to="2"
          className="active"
        ></li>
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white text-center">
                <h1 className="mb-3">Learn Bootstrap 5 with MDB</h1>
                <h5 className="mb-4">
                  Best &amp; free guide of responsive web design
                </h5>
                <a
                  className="btn btn-outline-light btn-lg m-2"
                  href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start tutorial
                </a>
                <a
                  className="btn btn-outline-light btn-lg m-2"
                  href="https://mdbootstrap.com/docs/standard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  Download MDB UI KIT
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white text-center">
                <h2>You can place here any content</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item active">
          <div
            className="mask"
            style={{
              background: `linear-gradient(
                45deg,
                rgba(29, 236, 197, 0.7),
                rgba(91, 14, 214, 0.7) 100%
              )`,
            }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white text-center">
                <h2>And cover it with any mask</h2>
                <a
                  className="btn btn-outline-light btn-lg m-2"
                  href="https://mdbootstrap.com/docs/standard/content-styles/masks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  Learn about masks
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#introCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#introCarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
