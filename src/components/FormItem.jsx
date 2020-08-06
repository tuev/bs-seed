import React from "react";

const FormItem = () => {
  return (
    <section className="mb-5">
      <h4 className="mb-5 text-center">
        <strong>Facilis consequatur eligendi</strong>
      </h4>

      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form3Example1"
                    className="form-control"
                  />
                  <label
                    className="form-label"
                    htmlFor="form3Example1"
                    style={{ marginLeft: 0 }}
                  >
                    First name
                  </label>
                  <div className="form-notch">
                    <div
                      className="form-notch-leading"
                      style={{ width: 9 }}
                    ></div>
                    <div
                      className="form-notch-middle"
                      style={{ width: 68.8 }}
                    ></div>
                    <div className="form-notch-trailing"></div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form3Example2"
                    className="form-control"
                  />
                  <label
                    className="form-label"
                    htmlFor="form3Example2"
                    style={{ marginLeft: 0 }}
                  >
                    Last name
                  </label>
                  <div className="form-notch">
                    <div
                      className="form-notch-leading"
                      style={{ width: 9 }}
                    ></div>
                    <div
                      className="form-notch-middle"
                      style={{ width: 68 }}
                    ></div>
                    <div className="form-notch-trailing"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control" />
              <label
                className="form-label"
                htmlFor="form3Example3"
                style={{ marginLeft: 0 }}
              >
                Email address
              </label>
              <div className="form-notch">
                <div className="form-notch-leading" style={{ width: 9 }}></div>
                <div
                  className="form-notch-middle"
                  style={{ width: 88.8 }}
                ></div>
                <div className="form-notch-trailing"></div>
              </div>
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                id="form3Example4"
                className="form-control"
              />
              <label
                className="form-label"
                htmlFor="form3Example4"
                style={{ marginLeft: 0 }}
              >
                Password
              </label>
              <div className="form-notch">
                <div className="form-notch-leading" style={{ width: 9 }}></div>
                <div className="form-notch-middle" style={{ width: 64 }}></div>
                <div className="form-notch-trailing"></div>
              </div>
            </div>

            <div className="form-check d-flex justify-content-center mb-4">
              <input
                className="form-check-input mr-2"
                type="checkbox"
                value=""
                id="form2Example3"
              />
              <label className="form-check-label" htmlFor="form2Example3">
                Subscribe to our newsletter
              </label>
            </div>

            <button className="btn btn-primary btn-block mb-4">Sign up</button>

            <div className="text-center">
              <p>or sign up with:</p>
              <button
                type="button"
                className="btn btn-primary btn-floating mx-1"
              >
                <i className="fab fa-facebook-f"></i>
              </button>

              <button
                type="button"
                className="btn btn-primary btn-floating mx-1"
              >
                <i className="fab fa-google"></i>
              </button>

              <button
                type="button"
                className="btn btn-primary btn-floating mx-1"
              >
                <i className="fab fa-twitter"></i>
              </button>

              <button
                type="button"
                className="btn btn-primary btn-floating mx-1"
              >
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormItem;
