import React from "react";

export default function ContactBar() {
  return (
    <section className="my-info">
      <nav>
        <div className="my-name">
          <h1>Christopher Gonzalez</h1>
          <h2 class="first-h2">SoftWare Developer</h2>
        </div>
        <div className="contact-info">
          <p>
            <a href="mailto:chris.gonzalez836@gmail.com">
              chris.gonzalez836@gmail.com
            </a>
          </p>
          <a
            href="https://www.linkedin.com/in/chris-gonzalez-70a54416a/"
            target="_blank"
          >
            <i class="fa fa-linkedin-square fontSize" />
          </a>
          <a href="https://github.com/ChrisGantz" target="_blank">
            <i class="fa fa-github fontSize" />
          </a>
        </div>
      </nav>
    </section>
  );
}
