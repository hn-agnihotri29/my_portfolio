import React from "react";
import './Project.style.scss';
import ProjectWork from "../ProjectWork/Projectwork";

const Project = () => {
    return (
        <div className="project_container" id="projects">
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
                <ProjectWork
                    projectName="MERN Invoice"
                    projectDescription="This project delivers a robust and modern invoicing solution built using the MERN stack 
                                        It leverages Docker for containerization,
                                         Nginx for web server optimization, 
                                         Redux Toolkit for efficient state management,
                                          RTK Query for streamlined data fetching, 
                                          JWT for secure authentication, and ReactJS for a dynamic user interface.

"
                    imageUrl="/image/mi.jpeg"
                    technologies={['MERN', 'Styled Components', 'SCSS', 'Docker', 'Nginx']}
                    githubLink="https://github.com/hn-agnihotri29/mern-invoice"
                />

                <ProjectWork
                    projectName="WCE-Disease Detection"
                    projectDescription="Working with TensorFlow image classification with CNN. Creating a model with the best accuracy for detecting different cancerous cells in the
                                        stomach with 82% validation accuracy.
                                        "
                    imageUrl="/image/wce.png"
                    technologies={['Python', 'TensorFlow']}
                    githubLink="https://github.com/hn-agnihotri29/WCE-disease_detection"
                />
            </div>
            
        </div>
    )

}

export default Project;