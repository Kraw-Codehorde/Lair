import { useState, useEffect } from "react";
import axios from "axios";

const mapIdToUrl = {
  5: "https://github.com/Kraw-Codehorde/Lair",
  6: "https://github.com/Kraw-Codehorde/Core_API",
  7: "https://github.com/Kraw-Codehorde/room-pals",
  8: "https://github.com/Kraw-Codehorde/room-pals2",
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProjects = async () => {
    const _header = {
      "Content-Type": "application/json",
      Authorization: "Api-Key cqpiFIS2.TnvxK5pp3jNNE8gzyLB1EgEtm3TgXwkF",
      Origin: "https://kraw-codehorde.github.io/Lair/",
    };
    const response = await axios.get(
      "https://api.krawcodehorde.xyz:1338/api/projects",
      {
        headers: _header,
      }
    );
    // console.log('response', response.data);
    setLoading(false);
    setProjects(response.data);
  };

  useEffect(() => {
    getProjects();
    // console.log('projects', projects);
  }, []);

  // return (
  //   <>
  //   {loading? <div>...loading</div> : (projects.map((project) =>(
  //     <div key={project.id}>Title: {project.name}</div>
  //   )))}

  //   </>
  // )

  return (
    <section className="colorlib-work" data-section="work">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">My Work</span>
            <h2 className="colorlib-heading animate-box">Recent Projects</h2>
          </div>
        </div>
        <div
          className="row row-bottom-padded-sm animate-box"
          data-animate-effect="fadeInLeft"
        >
          {/* <div className="col-md-12">
            <p className="work-menu">
              <span>
                <a href="#" className="active">
                  Graphic Design
                </a>
              </span>{" "}
              <span>
                <a href="#">Web Design</a>
              </span>{" "}
              <span>
                <a href="#">Software</a>
              </span>{" "}
              <span>
                <a href="#">Apps</a>
              </span>
            </p>
          </div> */}
        </div>
        <div className="row">
          {loading ? (
            <div>...loading</div>
          ) : (
            projects.map((project) => (
              <>
                <div className="col-md-6" data-animate-effect="fadeInLeft">
                  <div
                    className="project"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="desc">
                      <div className="con">
                        <h3>
                          <a href={project.url}>{project.name}</a>
                        </h3>
                        <span>{project.description}</span>
                        <p className="icon">
                          <span>
                            {project.id >= 5 && project.id <= 8 ? (
                              <a href={mapIdToUrl[project.id]}>
                                {/* <i className="icon-share3"></i> */}
                                <i className="icon-share3">
                                  <img src='static/images/github-mark.png'
                                  height="15" width="15" />
                                </i>
                              </a>
                            ) : (
                              <span>
                                <a href="#">
                                  <i className="icon-share3"></i>
                                </a>
                              </span>
                            )}
                          </span>

                          {/* <span>
                            <a href="#">
                              <i className="icon-eye"></i> 100
                            </a>
                          </span>
                          <span>
                            <a href="#">
                              <i className="icon-heart"></i> 49
                            </a>
                          </span> */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))
          )}
          {/* <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInRight"
          >
            <div
              className="project"
              style={{backgroundImage: "url(static/images/img-2.jpg)"}}
            >
              <div className="desc">
                <div className="con">
                  <h3>
                    <a href="work.html">Work 02</a>
                  </h3>
                  <span>Animation</span>
                  <p className="icon">
                    <span>
                      <a href="#">
                        <i className="icon-share3"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-eye"></i> 100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart"></i> 49
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
            <div
              className="project"
              style={{backgroundImage: "url(static/images/img-3.jpg)"}}
            >
              <div className="desc">
                <div className="con">
                  <h3>
                    <a href="work.html">Work 03</a>
                  </h3>
                  <span>Illustration</span>
                  <p className="icon">
                    <span>
                      <a href="#">
                        <i className="icon-share3"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-eye"></i> 100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart"></i> 49
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInBottom"
          >
            <div
              className="project"
              style={{backgroundImage: "url(static/images/img-4.jpg)"}}
            >
              <div className="desc">
                <div className="con">
                  <h3>
                    <a href="work.html">Work 04</a>
                  </h3>
                  <span>Application</span>
                  <p className="icon">
                    <span>
                      <a href="#">
                        <i className="icon-share3"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-eye"></i> 100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart"></i> 49
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div
              className="project"
              style={{backgroundImage: "url(static/images/img-5.jpg)"}}
            >
              <div className="desc">
                <div className="con">
                  <h3>
                    <a href="work.html">Work 05</a>
                  </h3>
                  <span>Graphic, Logo</span>
                  <p className="icon">
                    <span>
                      <a href="#">
                        <i className="icon-share3"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-eye"></i> 100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart"></i> 49
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInRight"
          >
            <div
              className="project"
              style={{backgroundImage: "url(static/images/img-6.jpg)"}}
            >
              <div className="desc">
                <div className="con">
                  <h3>
                    <a href="work.html">Work 06</a>
                  </h3>
                  <span>Web Design</span>
                  <p className="icon">
                    <span>
                      <a href="#">
                        <i className="icon-share3"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-eye"></i> 100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart"></i> 49
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="row">
          <div className="col-md-12 animate-box">
            <p>
              <a href="#" className="btn btn-primary btn-lg btn-load-more">
                Load more <i className="icon-reload"></i>
              </a>
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
