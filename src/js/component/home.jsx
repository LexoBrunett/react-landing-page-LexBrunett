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
		<div className="pb-5 position-relative"style={{height:"100vh",}}>
			<Navbar/>
			<Jumbotron/>
			<div className="container" style={{display:"flex", justifyContent: "space-around"}}>
				<Cards/> 
				<Cards/> 
				<Cards/> 
				<Cards/>
			</div>
			<div>
				<Footer/>
			</div>
		</div>
	);
};

export default Home;