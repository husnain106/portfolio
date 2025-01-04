import React from "react";

const Experience = ({ detailLevel }) => {
  const experiences = [
      {
        "title": "Revenue Protection Officer",
        "company": "Carlisle Support Services",
        "low": "Ensured station security and ticket sales.",
        "medium": "Managed station security by conducting regular inspections and ensuring ticket sales compliance. Prioritized passenger safety while providing clear communication and customer service.",
        "high": "As a Revenue Protection Officer, I ensured station security by conducting thorough inspections, monitoring passenger safety, and ensuring ticket sales compliance. Utilized secure software to responsibly handle sensitive information, maintaining high standards of accuracy and confidentiality. Regularly engaged with passengers to address inquiries, resolve issues, and ensure a positive experience while adhering to operational policies."
      },
      {
        "title": "Supervisor",
        "company": "Players",
        "low": "Supervised staff and managed operations.",
        "medium": "Led staff operations by supervising daily activities, ensuring technology functionality, and expediting customer orders to meet efficiency goals.",
        "high": "As a Players Supervisor, I managed and led a diverse team, ensuring seamless daily operations and high-quality customer service. Oversaw technology maintenance to optimize functionality and resolve technical issues proactively. Maintained strong relationships with suppliers to ensure inventory availability while keeping costs low. Leveraged leadership, time management, and coding skills to streamline operations, reduce expenses, and enhance overall efficiency. Consistently met and exceeded performance goals through strategic problem-solving and team collaboration."
      },
      {
        "title": "Customer Service Associate",
        "company": "Phoenix Customer Service",
        "low": "Provided customer service during maintenance.",
        "medium": "Delivered excellent customer service by addressing passenger concerns and resolving maintenance-related issues efficiently. Ensured colleague safety during routine and emergency operations.",
        "high": "In my role as a Customer Service Associate, I was responsible for ensuring seamless customer experiences during periods of maintenance. I independently resolved passenger concerns, from logistical issues to unexpected disruptions, maintaining a calm and professional demeanor. I prioritized the safety of colleagues by adhering to safety protocols and fostering a supportive environment. Demonstrated strong problem-solving skills and the ability to work under pressure while keeping customer satisfaction and operational goals at the forefront."
      },
      {
        "title": "Revenue Assistant",
        "company": "Secure World Security",
        "low": "Balanced customer service with revenue tasks.",
        "medium": "Balanced customer service responsibilities with revenue optimization for Transpennine Express by implementing effective strategies.",
        "high": "As a Revenue Assistant with Secure World Security, I successfully balanced customer service and revenue generation responsibilities for Transpennine Express. Developed and implemented an algorithm to optimize efficiency, enhancing both customer satisfaction and revenue streams. Delivered high-quality service by assisting passengers, resolving queries, and maintaining a courteous and approachable demeanor. Worked collaboratively with team members to streamline operations, ensuring compliance with organizational standards and operational excellence. This role honed my analytical, technical, and interpersonal skills, enabling me to contribute effectively to revenue and customer satisfaction goals."
      }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto pl-10">
        <h2 className="text-xl font-bold mb-4">Experience</h2>
        {experiences.map((experience) => (
          <div key={experience.title} className="mb-4 pl-5">
            <h3 className="text-lg font-semibold">{experience.title} at {experience.company}</h3>
            <p className="pl-4">{experience[detailLevel]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
