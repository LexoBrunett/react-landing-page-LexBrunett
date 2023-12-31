import React from "react";
import {Navbar} from "./NavBar.jsx"
import {Jumbotron} from "./Jumbotron.jsx"
import {Cards} from "./Cards.jsx"  
import  "/workspaces/react-landing-page-LexBrunett/src/styles/index.css"
import Footer from "./Footer.jsx";
import "../../styles/index.css"



//create your first component
const Home = () => {
	return (
		<div className="App">
			<Navbar/>
			<Jumbotron/>
			<div className="container" style={{display:"flex", justifyContent: "space-around"}}>
				<Cards/> 
				<Cards/> 
				<Cards/> 
				<Cards/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;