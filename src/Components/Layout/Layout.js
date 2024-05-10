// Layout.js
import React, { useState } from "react";
import Header from "./DashHeader";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="layout" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      {/* <button onClick={toggleSidebar} className="toggle-button">
        Toggle Sidebar
      </button> */}
      <div className={`content ${sidebarOpen ? "content-shift" : ""}`} style={{ flex: 1 }}>
       
        <div className="main-content">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
