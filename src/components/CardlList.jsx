import React from "react";

const CardlList = () => {
  return (
    <section className="text-center">
      <h4 className="mb-5">
        <strong>Facilis consequatur eligendi</strong>
      </h4>

      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-ripple-color="light"
            >
              <img
                alt="bt-thumb"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                className="img-fluid"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                />
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#!" className="btn btn-primary">
                Button
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-ripple-color="light"
            >
              <img
                alt="bt-thumb"
                src="https://mdbootstrap.com/img/new/standard/nature/023.jpg"
                className="img-fluid"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                />
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#!" className="btn btn-primary">
                Button
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-ripple-color="light"
            >
              <img
                alt="bt-thumb"
                src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                className="img-fluid"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                />
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#!" className="btn btn-primary">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardlList;
