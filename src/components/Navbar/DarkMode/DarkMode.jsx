import React from "react";
import "./DarkMode.css";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkMode = () => {
  const setDarkTheme =()=>{
    document.querySelector('body').setAttribute('data-theme','dark');
  }
  const setLightTheme =()=>{
    document.querySelector('body').setAttribute('data-theme','light');
  }

  const handleToggle=(e)=>{
    if(e.target.checked){
      setDarkTheme();
    }else{
      setLightTheme();
    }
  }

  return (
    <div className="dark_mode">
      <input type="checkbox" id="darkmode_toggle" onChange={handleToggle} defaultChecked={true} />
      <label className="darkmode_label" htmlFor="darkmode_toggle">
        <FaSun />
        <FaMoon />
      </label>
    </div>
  );
};

export default DarkMode;