const Services = () => {
  return (
    <>
      <section className="colorlib-services" data-section="services">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">Some Languages/tools</span>
              <h2 className="colorlib-heading">
                some of my expertise
              </h2>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
              <div className="services color-1">
                <span className="icon">
                  <img
                    src="static/images/python.png"
                    width="50"
                    height="50"
                    alt="Python"
                  />
                </span>
                <div className="desc">
                  <h3>Python</h3>
                  <p>
                   
                    Django, Flask, DRF, Others
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-3">
                <span className="icon">
                  <img
                    src="static/images/java-script.png"
                    width="50"
                    height="50"
                    alt="JavaScript"
                  />
                </span>
                <div className="desc">
                  <h3>JavaScript</h3>
                  <p>
                    Nodejs, Reactjs, Others
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-2">
                <span className="icon">
                  <img
                    src="static/images/docker.png"
                    width="50"
                    height="50"
                    alt="Docker"
                  />
                </span>
                <div className="desc">
                  <h3>Docker</h3>
                  <p>
                    Docker, Kubernets, Others
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-5">
                <span className="icon">
                  <img
                    src="static/images/aws.png"
                    width="50"
                    height="50"
                    alt="AWS"
                  />
                </span>
                <div className="desc">
                  <h3>Amazon Web Services</h3>
                  <p>
                    EC2, S3, Others
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-5">
                <span className="icon">
                  <img
                    src="static/images/database-storage.png"
                    width="50"
                    height="50"
                    alt="AWS"
                  />
                </span>
                <div className="desc">
                  <h3>DataBases</h3>
                  <p>SQLite, PSQL, Mongo, Others</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-4">
                <span className="icon">
                  <img
                    src="static/images/telegram-logo.png"
                    width="50"
                    height="50"
                    alt="AWS"
                  />
                </span>
                <div className="desc">
                  <h3>Message Brokers</h3>
                  <p>RabbitMQ, Redis, Amazon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        id="colorlib-counter"
        className="colorlib-counters"
        style={{ backgroundImage: "url(static/images/cover_bg_1.jpg)" }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="colorlib-narrow-content">
          <div className="row"></div>
          <div className="row">
            <div className="col-md-3 text-center animate-box">
              <span
                className="colorlib-counter js-counter"
                data-from="0"
                data-to="309"
                data-speed="5000"
                data-refresh-interval="50"
              ></span>
              <span className="colorlib-counter-label">Cups of coffee</span>
            </div>
            <div className="col-md-3 text-center animate-box">
              <span
                className="colorlib-counter js-counter"
                data-from="0"
                data-to="356"
                data-speed="5000"
                data-refresh-interval="50"
              ></span>
              <span className="colorlib-counter-label">Times cat slept over keyboard</span>
            </div>
            <div className="col-md-3 text-center animate-box">
              <span
                className="colorlib-counter js-counter"
                data-from="0"
                data-to="20"
                data-speed="5000"
                data-refresh-interval="50"
              ></span>
              <span className="colorlib-counter-label">Years spent in front of a computer</span>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
