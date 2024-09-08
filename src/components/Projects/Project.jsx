import React from "react";
import './Project.style.scss';
import ProjectWork from "../ProjectWork/Projectwork";

const Project = () => {
    return (
        <div className="project_container">
            <div className="project_content">
                <div className="project_title">
                    <p>project</p>
                    <h3>Each project is unique piece of development</h3>
                </div>
                <ProjectWork
                    projectName="Crwn-Clothing"
                    projectDescription="Created the e-commerce app using Reactjs, with Redux and Redux-saga. 
                                        Managed the databases with Firebase and added a Payment gateway using the Stripe API."
                    imageUrl="/image/crwn.png"
                    technologies={['React', 'Redux Toolkit', 'Firebase', 'Styled Components', 'SCSS']}
                    githubLink="https://github.com/hn-agnihotri29/crwn-clothing-e-commerce"
                    liveDemoLink="https://kaleidoscopic-lolly-57b67b.netlify.app/"
                />
            </div>
            
        </div>
    )

}

export default Project;