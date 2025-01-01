import React from "react";

const Experience = ({ detailLevel }) => {
  const experiences = [
    {
      title: "Revenue Protection Officer",
      company: "Carlisle Support Services",
      brief: "Ensuring station security and ticket sales.",
      summary: "Managed station security, passenger safety, and ticket sales through inspections.",
      detailed: "Ensured station security, passenger safety, and ticket sales through inspections. Used secure software for handling sensitive information.",
    },
    // Add more experiences here.
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-4">Experience</h2>
        {experiences.map((experience) => (
          <div key={experience.title} className="mb-4">
            <h3 className="text-lg font-semibold">{experience.title}</h3>
            <p>{experience[detailLevel]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
