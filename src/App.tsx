import './App.css'
import { SetStateAction, useState } from "react";
import Lokki from "./Lokki";
import SightingList from './SightingList';
import Info from './Info';

function App() {
  const [selectedTab, setSelectedTab] = useState("home");

  const handleTabChange = (newTab: SetStateAction<string>) => {
    setSelectedTab(newTab);
  };

  


  return (
    <div className="app-container">
    <div className="banner">
    <div className="banner-content">
      <h1>Seagull Fan Page</h1>
      <p>For all seagull fans!</p>
      </div>
    </div>

    <div className="content-container">
    <div className="tabs">
      <button onClick={() => handleTabChange("home")}>Home</button>
      <button onClick={() => handleTabChange("sightings")}>Local Sightings</button>
      <button onClick={() => handleTabChange("info")}>About</button>
    </div>

    {selectedTab === "home" && <Lokki />}
    {selectedTab === "sightings" && <SightingList />}
    {selectedTab === "info" && <Info />}
  </div>
  </div>
  )
  
}

export default App
