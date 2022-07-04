import React from "react";
import Card from "./Card";
import projects from "../projects";
import '../styles/Project.css';

function createCard(card){
    return (
        <Card 
            github = {card.github} 
            link = {card.active}
            title = {card.title}
            description = {card.description}
            stack = {card.stack}
            key={card.index}
        />
    )
}


function Projects(){
    return (
        <section id="projects">
            <div className="projects container">
            <h2 className="sec-heading">/projects</h2>

                <div className="project-grid row justify-content-start">
                
                {projects.map(createCard)}
                
                </div>
                
            </div>
        </section>
    );
}

export default Projects;