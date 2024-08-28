import React from 'react';
import './Experience.style.scss';
import Timeline from '../WorkTimeline/WorkTimeline';

const Experience = () => {
    return (
        <div className='experience'>
            <div className='container'>
                <div className='content'>
                    <div className='experience_title'>
                        <span>Experiences</span>
                        <Timeline />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;