import React, { useContext, useState } from "react";
import { DataContext } from "../data/DataContext";
import { Box, Modal } from "@mui/material";

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const { data, loading, isError } = useContext(DataContext);

  const iconsDict = data?.portfolio.projectIcons.reduce((acc, icon) => {
    const key = Object.keys(icon)[0];
    acc[key] = icon[key];
    return acc;
  }, {});

  const [activeProject, setActiveProject] = useState({
    title: "",
    description: "",
    struggle: "",
    solution: "",
    technologies: [],
    category: "",
    image: "",
    url: "",
    year: ""
  });

  if(loading){
    return <div>Portfolio section is loading..</div>
  }

  if(isError){
    return <div>{isError}</div>
  }

  const handleOpen = (project) => { 
    setOpen(true);
    setActiveProject((prev) => (
      { 
        title: project.title,
        description: project.description,
        struggle: project.struggle,
        solution: project.solution,
        technologies: project.technologies.split(', '),
        category: project.category,
        image: project.image,
        url: project.url,
        year: project.year
      }
    ));
  }
  const handleClose = () => { 
    setOpen(false); 
    setActiveProject({
      title: "",
      description: "",
      struggle: "",
      solution: "",
      technologies: [],
      category: "",
      image: "",
      url: "",
      year: ""
    });
  }

  if (data) {
    var projects = data.portfolio.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <p 
              title={projects.title}
              onClick={() => handleOpen(projects)}
            >
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}({projects.technologies})</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </p>
          </div>
          <div className="item-accomplished">
            <p>{projects.title}</p>
          </div>
        </div>
      );
    });

    var workprojects = data.portfolio.workProjects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <p 
              title={projects.title}
              onClick={() => handleOpen(projects)}
            >
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}({projects.technologies})</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </p>
          </div>
          <div className="item-accomplished">
            <p>{projects.title}</p>
          </div>
        </div>
      );
    });
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 32,
  };

  return (
    <>
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Work projects</h1>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} fixed="true">
          {activeProject && 
            <div className="modal-content-wrapper">

              <div className="modal-content header">
                <h1>{activeProject.title}</h1>

                <div className="modal-header-info">
                  <p>{activeProject.category}<span className="orange-dot"></span></p>

                  <div className="project-technologies">
                    {
                      activeProject.technologies.map((tech, i) => i < 5 && <img key={i} src={iconsDict[tech]} alt={tech} />)
                    }
                  </div>
                </div>

                <div className="image-container">
                  <a 
                    href={activeProject.url} 
                    title="Visit Page"
                    target="_blank" 
                    rel="noreferrer"
                  >
                      <svg width="44" height="46" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 23V38.0952C1.5 43.1002 6.99033 46.2613 11.4602 43.8325L18.4 40.0582M1.5 14.3333V7.90483C1.5 2.89983 6.99033 -0.261333 11.4602 2.1675L39.2195 17.2648C40.2601 17.8182 41.1306 18.6443 41.7376 19.6546C42.3446 20.6649 42.6653 21.8214 42.6653 23C42.6653 24.1786 42.3446 25.3351 41.7376 26.3454C41.1306 27.3557 40.2601 28.1818 39.2195 28.7352L25.3398 36.2838" stroke="white" stroke-width="3" stroke-linecap="round"/>
                      </svg>
                  </a>
                  <img src={`images/portfolio/${activeProject.image}`} alt={activeProject.title} />
                </div>
              </div>
              
              <div className="modal-content body">

                <div className="body-overview-wrapper">
                  <div className="body-overview-header">
                    <h3>Overview</h3>
                    <p>{activeProject.year}</p>
                  </div>
                  <p className="body-overview-description">{activeProject.description}</p>
                </div>

                <div className="body-problem-wrapper">
                  <h5>Problems</h5>
                  <p>{activeProject.struggle}</p>
                </div>

                <div className="body-solution-wrapper">
                  <h5>Solution</h5>
                  <p>{activeProject.solution}</p>
                </div>
                
                <a 
                  href={activeProject.url} 
                  title={activeProject.title} 
                  target="_blank" 
                  rel="noreferrer"
                >
                    Visit
                </a>
              </div>
            </div>
          }
        </Box>
      </Modal>
    </>
  );
};

export default Portfolio;
