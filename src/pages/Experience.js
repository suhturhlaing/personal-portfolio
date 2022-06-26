import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"
import StarIcon from "@material-ui/icons/Star"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#be95c4'>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2015-2019"
          iconStyle={ {background : "#966b9d", color : "#fff"}}
          icon = {<SchoolIcon />}
        >
          <h4 className='vertical-timeline-element-title'> University Of Computer Studies (Myeik) </h4>
          <h6 className="vertical-timeline-element-subtitle">Bachelor Degree</h6>
          <p> B.C.Sc (computer)</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2017"
          iconStyle={ {background : "#966b9d", color : "#fff"}}
          icon = {<SchoolIcon />}
        >
          <h4 className='vertical-timeline-element-title'> Samsung Test Institute Training </h4>
          <h6 className="vertical-timeline-element-subtitle"> Samsung Myanmar </h6>
          <p> Certificate </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2018"
          iconStyle={ {background : "#966b9d", color : "#fff"}}
          icon = {<SchoolIcon />}
        >
          <h4 className='vertical-timeline-element-title'> Software Development Internship </h4>
          <h6 className="vertical-timeline-element-subtitle"> Galaxy Wave.Co,ltd </h6>
          <p> Certificate </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2019"
          iconStyle={ {background : "#966b9d", color : "#fff"}}
          icon = {<SchoolIcon />}
        >
          <h4 className='vertical-timeline-element-title'> PHP Development BootCamp </h4>
          <h6 className="vertical-timeline-element-subtitle"> Myanmar IT Consulting </h6>
          <p> Certificate </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2021"
          iconStyle={ {background : "#966b9d", color : "#fff"}}
          icon = {<SchoolIcon />}
        >
          <h4 className='vertical-timeline-element-title'> Laravel Practice </h4>
          <h6 className="vertical-timeline-element-subtitle"> Test Dome </h6>
          <p> Certificate </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="2020-2022"
          iconStyle={ {background : "#6d597a", color : "#fff"}}
          icon = {<WorkIcon />}
        >
          <h4 className='vertical-timeline-element-title'> Web Application Developer (Full Stack) </h4>
          <h6>@ Zote By Focus Innovation</h6>
          <p> Helped the team launch 2 major faeatures by working both in the front end and back end.</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="2019-2020"
          iconStyle={ {background : "#6d597a", color : "#fff"}}
          icon = {<WorkIcon />}
        >
          <h4 className='vertical-timeline-element-title'> Full Stack Engineer </h4>
          <h6>@ Blue Plantnet (Blue Ocean Company, Ltd)</h6>
          <p> Helped the team launch 2 major faeatures by working both in the front end and back end.</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="2019"
          iconStyle={ {background : "#6d597a", color : "#fff"}}
          icon = {<WorkIcon />}
        >
          <h4 className='vertical-timeline-element-title'> IT Services </h4>
          <h6>@ Myanmar Information Technology (MIT)</h6>
          <p> Helped the team launch 2 major faeatures by working both in the front end and back end.</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="May - August 2019"
          iconStyle={ {background : "#6d597a", color : "#fff"}}
          icon = {<WorkIcon />}
        >
          <h4 className='vertical-timeline-element-title'> OJT Developer </h4>
          <h6>@ Galaxy Wave Co., Ltd</h6>
          <p> Helped the team launch 2 major faeatures by working both in the front end and back end.</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="1 year"
          iconStyle={ {background : "#6d597a", color : "#fff"}}
          icon = {<WorkIcon />}
        >
          <h4 className='vertical-timeline-element-title'> Freelance web developer </h4>
          <h6>Yangon , Myanamr</h6>
        </VerticalTimelineElement>

        
      </VerticalTimeline>
     
    </div>
  )
}

export default Experience
