// import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    let dataProject = this.props.dataProject;
    return dataProject.map((project, index) => {
      return (
        <React.Fragment>
          <div>
            <li>{project.title}</li>
            <img src="{project.img-src}" alt="" />
          </div>
        </React.Fragment>
      );
    });
  }
}
