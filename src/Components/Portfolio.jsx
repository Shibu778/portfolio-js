/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "First Principle Search of Quantum Point Defects",
    description:
      "first principle Density functional theory to model point defect in solids to understand the thermodynamic, electronic, optical and magnetic properties",
    url: "https://shibumeher.netlify.app/project/project1/",
  },
  {
    title: "My First PyPI package",
    description:
      "Created a Python package and uploaded it to PyPI. The package is combines ASE and spglib to extract symmetry information from any structure file",
    url: "https://github.com/shibu778/structure2symmetry",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Wowchemy template and deployed to Netlify. Includes my experience, skills, projects, and talks.",
    url: "https://shibumeher.netlify.app/",
  },
  {
    title: "My Talks at Various Occasion",
    description:
      "Slides and abstract of my talks at various occasion.",
    url: "https://shibumeher.netlify.app/event/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
