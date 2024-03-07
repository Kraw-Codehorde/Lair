const About = () => {
  return (
    <section className="colorlib-about" data-section="about">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-12">
            <div
              className="row row-bottom-padded-sm animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="col-md-12">
                <div className="about-desc">
                  <span className="heading-meta">About Me</span>
                  <h2 className="colorlib-heading">Who Am I?</h2>
                  <p>
                    <strong>Hello and Welcome to this portfolio of mine, I'm Nico, and among many other things, a Full Stack Developer.</strong> Since i was little i've been exploring, tinkering and playing with computers. I hope we can get to know each other and work together to create something awesome.
                  </p>
                  <p>
                    This portfolio is a place where i can showcase my skills and projects. For reference, this portfolio is pulling projects from a personal API, and the frontend is fully constructed using React. I hope you enjoy it and feel free to contact me if you have any questions. As time goes by, more projects will automatically be added/updated. Have a nice day!
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="services color-1">
                  <span className="icon2">
                  <img src="static/images/full-stack.png" width="50" height="50" alt="fs" />
                  </span>
                  <h3>Full Stack Developer</h3>
                </div>
              </div>
              <div
                className="col-md-3 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="services color-2">
                  <span className="icon2">
                  <img src="static/images/cloud.png" width="50" height="50" alt="cloud" />
                  </span>
                  <h3>Cloud Computing</h3>
                </div>
              </div>
              <div
                className="col-md-3 animate-box"
                data-animate-effect="fadeInTop"
              >
                <div className="services color-3">
                  <span className="icon2">
                  <img src="static/images/software-development.png" width="50" height="50" alt="se" />
                  </span>
                  <h3>Software Engineering</h3>
                </div>
              </div>
              <div
                className="col-md-3 animate-box"
                data-animate-effect="fadeInBottom"
              >
                <div className="services color-4">
                  <span className="icon2">
                  <img src="static/images/database-storage.png" width="50" height="50" alt="db" />
                  </span>
                  <h3>DB Management</h3>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div
                className="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="hire">
                  <h2>
                    I am happy to know you <br />
                    that 300+ projects done sucessfully!
                  </h2>
                  <a href="#" className="btn-hire">
                    Hire me
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
