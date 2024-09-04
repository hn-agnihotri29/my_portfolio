import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdWork } from "react-icons/md";
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.style.scss';


const Timeline = () => {
    return (
        <div className=' '>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work card" 
                    contentStyle={{ }}
                    contentArrowStyle={{ borderRight: "7px ridge" }}
                    date="May,2024 - present"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={<MdWork />}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer Inter @EaConnect</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bangalore, IN</h4>
                    <p style={{fontSize: '12px', textAlign: "justify"}}>
                        EA Connect allows for direct, seamless integration between all enterprise applications.
                        Lead the database migration project, transferring all data from MongoDB to PostgreSQL,
                        Collaborated with cross-functional teams to implement database schema changes,
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work card"
                    contentStyle={{}}
                    contentArrowStyle={{}}
                    date="May,2023 - July,2023"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={<MdWork />}
                >
                    <h3 className="vertical-timeline-element-title">Summer Internship @Salesforce</h3>
                    <h4 className="vertical-timeline-element-subtitle">Remote, IN</h4>
                    <p style={{fontSize: '12px', textAlign: "justify"}}>
                        Done Virtual Internship as Salesforce developer. Learn Apex,Lighting Web Componenet, CRM and API
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        
    )
}

export default Timeline;