import React from "react";
import "./NavTabs.css";

const NavTabs = () => {
  return (
    <div className="nav-tabs">
      <button>Summary</button>
      <button className="active">Chart</button>
      <button>Statistics</button>
      <button>Analysis</button>
      <button>Settings</button>
    </div>
  );
};

export default NavTabs;
