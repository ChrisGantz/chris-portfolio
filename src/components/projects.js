import React from "react";
import writingConcept from "../webPic/landingpage.jpg";
import podquest from "../webPic/podquest.jpg";
import morsecode from "../webPic/morse-code.jpg";
import snakegame from "../webPic/snakegame.jpg";

export default function Projects() {
  return (
    <section className="project">
        <h2>Projects</h2>
        <section className="projects-list">
          <div className="each-project">
            <img src={writingConcept} />
            <div className="about-projects">
              <h3>Writing Concepts</h3>
              <p>
                Writing Concepts allows you to create posts about ideas you may have
            for a story. You can comment like and dislike a post.
              </p>
              <p>Tech Used: HTML, CSS, React, MongoDB, Express, and Node</p>
              <p className="demo-code">
              <a href="https://github.com/ChrisGantz/stories-client" target="_blank" rel="noopener noreferrer">Code&nbsp;</a>
              <a href="https://writing-concepts.herokuapp.com/" target="_blank" rel="noopener noreferrer">- Demo</a>
              </p>
            </div>
          </div>
          <div className="each-project" >
            <img src={podquest} />
            <div className="about-projects">
              <h3>PodQuest</h3>
              <p className="info-app">
                Love listening to podcasts? Then this app is for you! keep track of your favorite episodes or subscribe to a channel altogether.
              </p>
            <p>Tech Used: HTML, CSS, React, MongoDB, Express, and Node</p>
            <p className="demo-code">
              <a href="https://github.com/thinkful-ei23/podquest-server" target="_blank" rel="noopener noreferrer">Code&nbsp;</a>
              <a href="https://podquest-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">- Demo</a>
            </p>
            </div>
          </div>
          <div className="each-project">
            <img src={morsecode} />
            <div className="about-projects">
              <h3>Learn Morse</h3>
              <p>
                Have fun learning Morse Code with this app! its uses spaced repititon algorithm to help you learn!
              </p>
            <p>Tech Used: HTML, CSS, React, MongoDB, Express, and Node</p>
            <p className="demo-code">
              <a href="https://github.com/thinkful-ei23/SRC-Morse-Client" target="_blank" rel="noopener noreferrer">Client code&nbsp;-</a>
              <a href="https://github.com/thinkful-ei23/SRC-Morse-Client" target="_blank" rel="noopener noreferrer">Server code&nbsp;</a>
              <a href="https://morse-learning-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">- Demo</a>
            </p>
            </div>
          </div>
          <div className="each-project">
            <img className="snake-game-img" src={snakegame} />
            <div className="about-projects">
              <h3>Writing Concepts</h3>
              <p>
                I was tasked with learning a new language and applying what I learned within a week I choose python and made a game using pygame.
                It was very fun and I will be looking more into python because of it!
              </p>
            <p className="demo-code">
              <a href="https://github.com/ChrisGantz/snake-game" target="_blank" rel="noopener noreferrer"> Code </a>
            </p>
            </div>
          </div>
        </section>
    </section>
  );
}
