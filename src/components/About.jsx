import React from "react";
import '../styles/About.css'

function About(){
    return(
        <section id="about">

        <div className="about">
            <h2 className="sec-heading">/about me</h2>
            <div className="row">
            <div className="col-6 about-text">
                <p>
                I am currently a third year Computer Science student who has great interest in full-stack development as well as data science. 
                I am someone who loves to take up new challenges and learn new skills. Along with all this I like taking part in Hackathons, meet new people and exchange different ideas.
                </p>

            <a href="assets/Akansha_Sakhre_resume.pdf" download="akanshaResume"><button className="download-btn btn btn-outline-light">Resume <i className="fas fa-download"></i></button></a>

            </div>

            <div className="col-6 about-image">
                <img className="self-picture" src="/assets/me.jpg"/>
            </div>
            </div>
            </div>
    </section>
    );
}

export default About;
