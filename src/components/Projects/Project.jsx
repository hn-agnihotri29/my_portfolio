import React from "react";
import './Project.style.scss';

const Project = () => {
    return (
        <div className="project_container">
            <div className="project_content">
                <div className="project_title">
                    <p>project</p>
                    <h3>Each project is unique piece of development</h3>
                </div>
                <div className="project">
                    <div className='img-side'>
                        <img src="/image/crwn.png" alt="crwn-clothing"/>
                    </div>
                    <div className='project-side'>
                        <h3>Crwn-Clothing</h3>
                        <p>Created the e-commerce app using Reactjs, with Redux and Redux-saga
                        Managed the databases with Firebase and added a Payment gateway using Payment Stripe.</p>

                    </div>
                </div>
            </div>
            
        </div>
    )

}

export default Project;