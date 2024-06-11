import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import Home from "./components/Home";
import OurTeam from "./sections/OurTeam/OurTeam";

import "./styles/main.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/project1" element={<Project1/>}/>
				<Route path="/project2" element={<Project2/>}/>
				<Route path="/project3" element={<Project3/>}/>
				<Route path="/project4" element={<Project4/>}/>
				<Route path="/team" element={<OurTeam/>}/>
			</Routes>
		</Router>
	)
}

export default App;
