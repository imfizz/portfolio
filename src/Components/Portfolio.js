import React, { useContext } from "react";
import { DataContext } from "../data/DataContext";

const Portfolio = () => {
  const { data, loading, isError } = useContext(DataContext);

  if(loading){
    return <div>Portfolio section is loading..</div>
  }

  if(isError){
    return <div>{isError}</div>
  }

  if (data) {
    var projects = data.portfolio.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title} target="_blank" rel="noreferrer">
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
          <div className="item-accomplished">
            <p>Date Created: {projects.year}</p>
          </div>
        </div>
      );
    });

    var workprojects = data.portfolio.workProjects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title} target="_blank" rel="noreferrer">
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
          <div className="item-accomplished">
            <p>Date Created: {projects.year}</p>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Company projects</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {workprojects}
          </div>
        </div>
        <div className="twelve columns collapsed">
          <h1>Personal Projects</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
