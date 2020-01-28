// import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    let dataProject = this.props.dataProject;
    // return dataProject.map((project, index) => {
    console.log(dataProject);
    return (
      <React.Fragment>
        <section id="projects" className="services section-padding">
          <h2 className="section-title wow flipInX" data-wow-delay="0.4s">
            What I've done
          </h2>
          <div className="container">
            <div className="row">
              {/* Services item */}
              {dataProject.map(project => {
                return (
                  <div className="col-md-6 col-lg-3 col-xs-12">
                    <div
                      className="services-item wow fadeInDown"
                      data-wow-delay="0.3s"
                    >
                      <div className="icon">
                        <i className="icon-grid" />
                      </div>
                      <div className="services-content">
                        <h3>
                          <a href="{project.src}">{project.title}</a>
                        </h3>
                        <p>{project.description}</p>
                      </div>
                    </div>
                    <br />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        ;
        {/* <div>
            <li>{project.title}</li>
            <p>{project.description}</p>
            <img src={project.src} alt="" />
          </div> */}
      </React.Fragment>
    );
    // });
  }
}
