import { Herobg } from "./urlFilePath";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div>
      <div className="bg-fixed">
        <img className="absolute -z-50 w-full h-screen" src={Herobg} alt='Hero Background'/>
      <Navbar/>
      <Hero/>
      </div>
      </div>

      <div className="h-screen bg-blue-500"></div>
    </div>
  );
}

export default App;
