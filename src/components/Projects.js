import React from "react";

const Projects = ({ detailLevel }) => {
  const projects = [
      {
        name: "LogiGame | Dissertation project",
        low: "A mobile game to educate on logic gates",
        medium: "A level-based mobile game developed with Godot game engine to educate college students on logic gates.",
        high: "Developed a mobile game using Godot, aimed at educating college students on logic gates. Tested mechanics in Unity and Unreal before finalizing the choice of Godot as the game engine. Used git workflow to manage repository to replicate an industry environment."
      },
      {
        name: "Hex AI | Team Project",
        low: "Machine learning models for Hex game",
        medium: "Developed machine learning models including UCT, Monte Carlo, and AB-pruning to play Hex game.",
        high: "Built machine learning models (UCT algorithm, Monte Carlo, AB-pruning) with Java for Hex game. Focused on optimizing performance and accuracy for competitive gameplay scenarios."
      },
      {
        name: "Events Tracker",
        low: "Web application to track events",
        medium: "Developed a web application using Spring Boot for back-end and Thymeleaf with JavaScript for front-end.",
        high: "Created an event tracker using Spring Boot framework for back-end and Thymeleaf templates with JavaScript for the front-end. Ensured seamless integration and user-friendly navigation for effective event management."
      },
      {
        name: "Stendhal Game",
        low: "Bug fixing and feature addition for open-source game",
        medium: "Worked on open-source game Stendhal to fix bugs and add features using Java.",
        high: "Contributed to the open-source project Stendhal by fixing bugs and adding new features using Java. Applied agile and test-driven development methodologies to ensure quality and efficiency."
      },
      {
        name: "Random Quote Generator",
        low: "Website for generating random quotes",
        medium: "Developed a JavaScript-powered website to generate random quotes with a focus on user experience.",
        high: "Designed and implemented a visually engaging quote generator using JavaScript, enhancing user interaction and dynamic content delivery."
      },
      {
        name: "Rock Paper Scissors",
        low: "Interactive game using JavaScript",
        medium: "Created a Rock, Paper, Scissors game with JavaScript and CSS for user interaction.",
        high: "Developed an interactive Rock, Paper, Scissors game using JavaScript and CSS, integrating logic and responsive user interaction for an engaging experience."
      },
      {
        name: "SeeKinter | Team Project",
        low: "Drag-and-drop application with Tkinter",
        medium: "Built a drag-and-drop feature using Python’s Tkinter library with Django framework.",
        high: "Implemented a drag-and-drop application using Python's Tkinter library and Django framework. Integrated SQL database with input validation and hashing for secure data handling."
      },
      {
        name: "Currency Converter",
        low: "Website for real-time currency conversion",
        medium: "Developed a currency conversion website using JavaScript and real-time exchange rate APIs.",
        high: "Created a responsive website for real-time currency conversion using JavaScript and external exchange rate APIs, ensuring accuracy and user accessibility."
      },
      {
        name: "Crime Prevention App | Hack Manchester 2018",
        low: "App for aiding crime prevention",
        medium: "Built a Python app to aid authorities in crime prevention with security-focused techniques.",
        high: "Developed a Python-based app to assist in crime prevention, incorporating advanced hash techniques for enhanced security. Designed as part of Hack Manchester 2018."
      }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto pl-10">
        <h2 className="text-xl font-bold mb-4">Projects</h2>
        {projects.map((project) => (
          <div key={project.name} className="mb-4 pl-5">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="pl-4">{project[detailLevel]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
