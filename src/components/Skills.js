import React from "react";

const Skills = () => {
  const skills = ["Java", "Python", "C", "C#", "Jacascript","Php","HTML","CSS", "React","Django", "Spring Boot", "Unity","Unreal", "Godot",];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto pl-10">
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
