import { useState } from 'react';
import './App.css';

function App() {
  const [detailLevel, setDetailLevel] = useState("low");

  const content = {
    intro: {
      low: "Software Engineer.",
      medium: "I build modern web applications.",
      high: "I am a software engineer specializing in building scalable and responsive web applications using React and Node.js."
    }
  };
  
  return (
    <div>
      <nav>
        <button onClick={() => setDetailLevel("low")}>Low Detail</button>
        <button onClick={() => setDetailLevel("medium")}>Medium Detail</button>
        <button onClick={() => setDetailLevel("high")}>High Detail</button>
      </nav>
      <p>{content.intro[detailLevel]}</p>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind!</h1>
      </div>
    </div>
  );
}

export default App;
