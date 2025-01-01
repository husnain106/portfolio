import React from "react";

const Projects = ({ detailLevel }) => {
  const projects = [
    {
      name: "LogiGame",
      brief: "Educating students on logic gates.",
      summary: "A level-based mobile game developed with Godot.",
      detailed: "Developed a mobile game using Godot, aimed at educating college students on logic gates. Tested mechanics in Unity and Unreal before finalizing.",
    },
    // Add more projects here.
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-4">Projects</h2>
        {projects.map((project) => (
          <div key={project.name} className="mb-4">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p>{project[detailLevel]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
