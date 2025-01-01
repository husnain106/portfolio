import { useState } from 'react';
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [detailLevel, setDetailLevel] = useState("brief");

  return (
    <div className="min-h-screen bg-gray-100">
      <p class="flex items-center justify-center space-x-6 text-green-600 font-semibold">I am aware that you're time is limited and valuable, so I have made varying level of detail for this portfolio that you can change between to save time if needed</p>
      <nav class="flex items-center justify-center space-x-4 pt-2 pb-2">
        <button title="This can be read in 2 minutes." class="btn bg-gray-400 hover:bg-gray-700 py-2 px-4 rounded" onClick={() => setDetailLevel("low")}>Keywords</button>
        <button title="This can be read in 5 minutes."class="btn bg-gray-400 hover:bg-gray-700 py-2 px-4 rounded" onClick={() => setDetailLevel("medium")}>Short sentences</button>
        <button title="This can be read in 10 minutes."class="btn bg-gray-400 hover:bg-gray-700 py-2 px-4 rounded" onClick={() => setDetailLevel("high")}>Paragraphs</button>
      </nav>
      <Header detailLevel={detailLevel} setDetailLevel={setDetailLevel} />
      <main>
        <About detailLevel={detailLevel} />
        <Skills />
        <Projects detailLevel={detailLevel} />
        <Experience detailLevel={detailLevel} />
        <Contact />
      </main>
    </div>
  );
}

export default App;
