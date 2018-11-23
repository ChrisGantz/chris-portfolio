import React from "react";
import writingConcept from "../webPic/landingpage.jpg";
export default function Projects() {
  return (
    <section className="project">
        <h2>Projects</h2>
        <ul className="projects-list">
          <li className="col-6 each-project">
            <img src={writingConcept} />
            <div className="about-projects">
              <h4>Writing Concepts</h4>
              <p>
                Writing Concepts allows you to create posts about ideas you may have
            for a story. You can comment like and dislike a post.
              </p>
              <p className="demo-code">
                <a href="https://github.com/ChrisGantz/stories-client" target="_blank">Code&nbsp;</a>
                <a href="https://writing-concepts.herokuapp.com/" target="_blank">- Demo</a>
              </p>
            </div>
          </li>
          <li className="col-6 each-project" >
            <img src={writingConcept} />
            <div className="about-projects">
              <h4>PodQuest</h4>
              <p>
                podquest app is a app about finding podcasts and being able to favorite them and
                subsribe to them it was a fun project
              </p>
            <p className="demo-code">
              <a href="https://writing-concepts.herokuapp.com/" target="_blank">Code&nbsp;</a>
              <a href="https://podquest-app.herokuapp.com/" target="_blank">- Demo</a>
            </p>
            </div>
          </li>
          <li className="col-6 each-project">
            <img src={writingConcept} />
            <div className="about-projects">
              <h4>Writing Concepts</h4>
              <p>
                Writing Concepts allows you to create posts about ideas you may have
              for a story. You can comment like and dislike a post.
            </p>
            <p className="demo-code">
              <a href="https://writing-concepts.herokuapp.com/" target="_blank">Code&nbsp;</a>
              <a href="https://writing-concepts.herokuapp.com/" target="_blank">- Demo</a>
            </p>
            </div>
          </li>
          <li className="col-6 each-project">
            <img src={writingConcept} />
            <div className="about-projects">
              <h4>Writing Concepts</h4>
              <p>
                Writing Concepts allows you to create posts about ideas you may have
                for a story. You can comment like and dislike a post.
              </p>
            <p className="demo-code">
              <a href="https://writing-concepts.herokuapp.com/" target="_blank">Code&nbsp;</a>
              <a href="https://writing-concepts.herokuapp.com/" target="_blank">- Demo</a>
            </p>
            </div>
          </li>
        </ul>
    </section>
  );
}
