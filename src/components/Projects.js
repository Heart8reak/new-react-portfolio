// import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    let dataProject = this.props.dataProject;
    return dataProject.map((project, index) => {
      console.log(dataProject);
      return (
        <React.Fragment>
          <div>
            <li>{project.title}</li>
            <p>{project.description}</p>
            <img src={project.src} alt="" />
          </div>
        </React.Fragment>
      );
    });
  }
}
