import React from 'react';
import "./About.style.scss";


const AboutMe = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='about-content'>
                    <div className='img-side'>
                    </div>
                    <div className='text-side'>
                        <h3>About me</h3>
                        <h4>
                            Full-Stack Developer
                            <br />
                            based in Bangalore, India 📍
                        </h4>
                        <p>
                            Hey, my name is Harshaja, and I'm a Full-Stack Developer. My focus is on leveraging my skills to deliver high-quality solutions that meet the needs of users and businesses alike.I am dedicated to creating seamless and efficient user experiences through my development work
                            <br />
                            <br />
                            I specialize in the MERN stack I have also worked on various projects using Django and Flask, incorporating Docker for efficient deployment and scalability.          
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutMe