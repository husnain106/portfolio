import React from "react";

const About = ({ detailLevel }) => {
    const details = {
    low: <ul class="list-disc pl-5">
        <li>Software Developer, Web Development</li>
        <li>Python, C++, Java</li>
        <li>Ambitious</li>
        <li>Hard working</li>
        <li>F1, Swimming</li></ul>,
    medium: <ul class="list-disc pl-5">
        <li>Software Developer specializing in web development and mobile applications</li>
        <li>Skilled in Python, C++, Java,</li>
        <li>Focused and driven towards my ambitons</li>
        <li>Hardworking and love to learn new skills</li>
        <li>Hobbies include swimming and watching F1</li></ul>,
    high: <p>I am a Software Developer specializing in web development and mobile applications, with expertise in programming languages like Python, C++, and Java. My approach to development emphasizes creating intuitive, user-focused digital experiences that are both functional and engaging. With a passion for innovation, I continuously seek opportunities to expand my skill set and deliver impactful solutions tailored to diverse challenges.
    <p><br></br>As an ambitious and hardworking professional, I thrive in environments that encourage learning and growth. I have honed my ability to collaborate effectively with stakeholders and adapt to evolving project requirements, ensuring the delivery of high-quality outcomes. My commitment to excellence is matched by a relentless drive to achieve my goals and contribute meaningfully to every project I undertake.</p>
    <p><br></br>Beyond my professional pursuits, I enjoy activities that fuel my creativity and passion. Swimming keeps me energized, while following Formula 1 inspires my love for precision, strategy, and innovation. These hobbies reflect my well-rounded approach to life and work, blending focus and enjoyment to maintain a balanced and productive mindset.</p></p>,
    };
    return (
        <section className="py-8 bg-white">
            <div className="container mx-auto pl-10">
                <h2 className="text-xl font-bold mb-4">About Me</h2>
                <p>{details[detailLevel]}</p>
            </div>
        </section>
    );
};

export default About;
