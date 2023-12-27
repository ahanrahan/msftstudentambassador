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
import image from "../images/5gTech.jpg";

const imageAltText = "image of antenna bands superimposed on top of city";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Comprehensive Project Charter",
    description:
      "As part of my undergraduate project management course, I created a comprehensive 7-page project charter based on the building of new office space for company merger. I analyzed scope, cost, and time constraints of the project to meet the needs of the organization, and coordinated work breakdown structure that detailed installation/purchase of laptops, VoIP telephony system, etc.",
    url: "https://1drv.ms/b/s!AkigDwzFbhFvgnNAdDc2kV_tIinA?e=IDntOW",
  },
  {
    title: "Cloud Architecture for Company Migration",
    description:
      "For my graduate cloud management course, I proposed a new SaaS and IaaS cloud architecture for a company looking to move to cloud solutions.",
    url: "https://1drv.ms/b/s!AkigDwzFbhFvgnEV03XF9Hf-jOUm?e=1qo55H",
  },
  {
    title: "Exploring Digital Transformation in Microsoft Showcase Schools",
    description:
      "My undergraduate Honors Thesis explores digital transformation in 5 Microsoft Showcase Schools in the UK.",
    url: "https://1drv.ms/b/s!AkigDwzFbhFvgnL1I1RQVETdxphV?e=b7D5J4",
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
