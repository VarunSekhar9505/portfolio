import React from "react";

const App = () => {
  const portfolioData = {
    name: "KOMMU VARUN",
    reg: "21BCE9929",
    place: "Andhra Pradesh, India",
    skills: [
      "AI Ml",
      "App Development",
      "Web Development",
      "Public Speaking",
      "Debate",
      "Event Management",
    ],
    projects: [
      {
        title: "Housing Price Prediction Machine Learning Project",
        description:
          "Created a regression model which is able to accurately estimate the price of the house given the features using comparative analysis of different ML models viz. LinearRegression Decision Tree.",
      },
      {
        title: "Personal portfolio",
        description:
          "Created a Personal portfolio web application using HTML,CSS,JavaScript",
      },
      {
        title: "Obstacle detector for blind people",
        description:
          "Developed a prototype obstacle detector stick using raspberry pi, I contributed on software part, wrote a python code and imported to raspberry pi board.",
      },
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>{portfolioData.name}</h1>
          <h2>
            <u>REGISTRATION NUMBER:</u> {portfolioData.reg}
          </h2>
          <h2>
            <u>PLACE:</u> {portfolioData.place}
          </h2>
        </div>
        <div className="body">
          <div className="about">
            <h3>
              <u>ABOUT ME</u>
            </h3>
            <p>
              I'm a third-year student at Vellore Institute of Technology
              majoring in computer science. I have a solid background in
              software development and computer science as a BTech student. Data
              Analytics, web development, and application development are just a
              few of the tech-related topics that I find fascinating. 
              I'm enthusiastic about how technology is advancing and how it will
              continue to influence our future.
            </p>
          </div>
          <div className="skills">
            <h3>
              <u>SKILLS</u>
            </h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3>
              <u>PROJECTS</u>
            </h3>
            {portfolioData.projects.map((project) => (
              <ul>
                <div className="project" key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;