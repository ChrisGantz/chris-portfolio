import React from "react";

export default function ContactBar() {
  return (
    <header role="banner" className="my-info">
      <nav>
        <div className="my-name">
          <h1>Christopher Gonzalez</h1>
          <h2 class="first-h2">SoftWare Developer</h2>
        </div>
        <div className="contact-info">
          <a href="mailto:chris.gonzalez836@gmail.com">
            <i className="fa fa-envelope-o fontSize" />
          </a>
          <a
            href="https://www.linkedin.com/in/chris-gonzalez-70a54416a/"
            target="_blank"
          >
            <i className="fa fa-linkedin-square fontSize" />
          </a>
          <a href="https://github.com/ChrisGantz" target="_blank">
            <i className="fa fa-github fontSize" />
          </a>
        </div>
      </nav>
    </header>
  );
}
