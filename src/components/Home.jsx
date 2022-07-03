import React from "react";
import '../styles/Home.css';

function Home(props){
    return(
        <section id="home">
                <div className="intro">
            <div className="img-bg"><img className="intro-img" src="assets/illustration.png" /> </div>
            <h1 className="home-heading">hi, <span className="name">akansha</span> here.</h1>
            <p className="home-p ">i am a sophmore computer science student, interested in web development, data science, and machine learning. </p>
        </div>  
        </section>
    );
}

export default Home;