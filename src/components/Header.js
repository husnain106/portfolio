import React from "react";

const Header = () => {
    return (
    <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-center items-center flex-col">
            <h1 className="text-2xl font-bold">Husnain Soharwardi</h1>
            <h2 className="text-2x1 font-bold">Software Developer</h2>
            <div className="flex space-x-4 items-center">
            <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
                Linkedin
            </a>
        </div>
        </div>
    </header>
    );
};

export default Header;
