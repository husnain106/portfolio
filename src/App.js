import { useState } from 'react';
import './App.css';
import About from "./components/About";
import Education from './components/Education';
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [detailLevel, setDetailLevel] = useState("medium");

  const getButtonClass = (level) =>
    detailLevel === level
      ? "bg-gray-700 text-white py-2 px-4 rounded"
      : "bg-gray-400 hover:bg-gray-700 py-2 px-4 rounded";


  return (
    <div className="min-h-screen bg-gray-100">
      <nav class="flex flex-col items-center justify-center space-x-4 pt-2 pb-2 sticky top-0 bg-gray-100">
        <p class="space-x-6 text-green-600 font-semibold">I am aware that you're time is limited and valuable, so I have made varying level of detail for this portfolio that you can change between to save time if needed</p>
        <div className="flex flex-row items-center justify-center space-x-4 pt-2 pb-2 sticky top-0 bg-gray-100">
          <button title="This can be read in 2 minutes." class= {getButtonClass("low")} onClick={() => setDetailLevel("low")}>No Detail</button>
          <button title="This can be read in 5 minutes."class={getButtonClass("medium")} onClick={() => setDetailLevel("medium")}>Some Detail</button>
          <button title="This can be read in 10 minutes."class={getButtonClass("high")} onClick={() => setDetailLevel("high")}>More Detail</button>
        </div>
      </nav>
      <Header/>
      <main>
        <About detailLevel={detailLevel}/>
        <Education/>
        <Projects detailLevel={detailLevel} />
        <Experience detailLevel={detailLevel} />
        <Skills />
      </main>
    </div>
  );
}

export default App;
