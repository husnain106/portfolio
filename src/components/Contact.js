import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; // Install react-icons if needed

const Contact = () => {
    return (
        <section id="contact" className="py-8 bg-gray-50">
        <div className="container mx-auto pl-10">
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <div className="flex space-x-6 text-lg justify-center">
            <a href="mailto:husnainali2468@outlook.com" className="hover:text-blue-600 flex items-center">
                <FaEnvelope className="mr-2" /> Email
            </a>
            <a href="https://linkedin.com/in/husnain-soharwardi-abb2b5205" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex items-center">
                <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a href="https://github.com/husnain106" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex items-center">
                <FaGithub className="mr-2" /> GitHub
            </a>
            </div>
        </div>
    </section>
    );
};

export default Contact;
