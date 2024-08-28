import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdWork } from "react-icons/md";
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.style.scss';


const Timeline = () => {
    return (
        <div className='container'>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work card"
                    contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                    date="20th May, 2024 - present"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={<MdWork />}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer Inter @EaConnect</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bangalore, IN</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project
                        Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff"}}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                    date="2011 - present"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={<MdWork />}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project
                        Management, Team Leading
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        
    )
}

export default Timeline;