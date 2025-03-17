import React from "react";
import "./App.css";

const Header = () => {
  return <div className="header"></div>;
};

const Main = () => {
  return <div className="main"></div>;
};

const Box = ({ className }) => {
  return <div className={`box ${className}`}></div>;
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Box className="box1" />
      <Box className="box2" />
      <div className="box-row">
        <Box className="small-box" />
        <Box className="small-box" />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <Sidebar />
    </div>
  );
};

export default App;
