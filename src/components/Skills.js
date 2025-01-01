import React from "react";

const Skills = () => {
  const skills = ["Java", "Python", "C#", "React", "Unity", "Godot", "Spring Boot"];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <span key={skill} className="px-4 py-2 bg-blue-200 rounded text-center">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
