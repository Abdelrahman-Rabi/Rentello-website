import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Post from "./components/Post";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Register />
      <Login />
      <Post />
    </div>
  );
};
export default App;
