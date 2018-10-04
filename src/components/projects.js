import React from "react";
import writingConcept from "../webPic/landingpage.jpg";
export default function Projects() {
  return (
    <section className="project">
      <div className="row">
        <h2>Projects</h2>
        <ul className="projects-list">
          <li className="col-6 each-project">
            <h4>Writing Concepts</h4>
            <img src={writingConcept} />
            <p>
              Writing Concepts allows you to create posts about ideas you may have
              for a story. You can comment like and dislike a post.
          </p>
          </li>
          <li className="col-6 each-project" >
            <h4>Writing Concepts</h4>
            <img src={writingConcept} />
            <p>
              Writing Concepts allows you to create posts about ideas you may have
              for a story. You can comment like and dislike a post.
          </p>
          </li>
          <li className="col-6 each-project">
            <h4>Writing Concepts</h4>
            <img src={writingConcept} />
            <p>
              Writing Concepts allows you to create posts about ideas you may have
              for a story. You can comment like and dislike a post.
          </p>
          </li>
          <li className="col-6 each-project">
            <h4>Writing Concepts</h4>
            <img src={writingConcept} />
            <p>
              Writing Concepts allows you to create posts about ideas you may have
              for a story. You can comment like and dislike a post.
          </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
