import React from "react";

const projects = [
  {
    title: "Meta Marketing Site",
    description:
      "A sleek landing page design with engaging animations and responsive layout. Built with HTML, CSS, and JavaScript, showcasing branding and conversion-focused UI elements.",
    liveLink: "https://midestic.github.io/meta/",
  },
  {
    title: "Moove - Brand Website",
    description:
      "A vibrant, modern website designed for a mobility brand. Includes fluid scroll interactions and visual storytelling to capture user attention and brand message.",
    liveLink: "https://midestic.github.io/moove/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Projects</h2>
        <p className="text-gray-600 mb-10">
          A selection of branding, marketing, and interface-focused projects
          I’ve contributed to.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Live Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
