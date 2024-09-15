import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import backgroundVideo from "../assets/background.mp4"; // Add your video here

const Experience = () => {
  return (
    <div name="experience" className='relative w-full min-h-screen grid grid-rows-2'>
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> 

      <div className='row-span-2 w-full bg-gradient-to-b from-black to-gray-800  text-white pt-32 '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8 z-10' >
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 mt-16 '>
              Experience
            </p>
          </div>

          <VerticalTimeline animate={true} lineColor={'#3b82f6'}>
            {/* Your VerticalTimelineElement components go here */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: '#9F2B68', 
                color: '#fff', 
                borderRadius: '12px', 
                boxShadow: '0px 10px 20px rgba(0,0,0,0.5)' 
              }}
              contentArrowStyle={{ borderRight: '7px solid  linear-gradient(145deg, #1f2937, #2d3748)' }}
              date="June 2024 - Aug 2024"
              iconStyle={{ 
                background: '#3b82f6', 
                color: '#fff', 
                boxShadow: '0px 4px 12px rgba(0,0,0,0.5)' 
              }}
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              }
            >
              <h3 className="vertical-timeline-element-title text-2xl font-semibold">Software Development Intern</h3>
              <h4 className="vertical-timeline-element-subtitle text-gray-300">Balyasny Asset Management</h4>
              <ul className='list-disc ml-6 text-lg'>
                <li>Developed sophisticated research tools utilizing C#, Swagger, React, and SQL, including a robust charting tool that enhanced financial metric analysis by 30%, thereby improving trading decision accuracy.</li>
                <li> Implemented Redis caching to optimize application performance, reducing response times by 90% and enabling swift analysis of historical financial data and market trends.</li>
              </ul>
            </VerticalTimelineElement>

            {/* Graduate Research Assistant */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: '#6d28d9', 
                color: '#fff', 
                borderRadius: '12px', 
                boxShadow: '0px 10px 20px rgba(0,0,0,0.5)'
              }}
              contentArrowStyle={{ borderRight: '7px solid  linear-gradient(145deg, #1e293b, #334155)' }}
              date="May 2023 - Present"
              iconStyle={{ 
                background: '#3b82f6', 
                color: '#fff', 
                boxShadow: '0px 4px 12px rgba(0,0,0,0.5)' 
              }}
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              }
            >
              <h3 className="vertical-timeline-element-title text-2xl font-semibold">Graduate Research Assistant</h3>
              <h4 className="vertical-timeline-element-subtitle text-gray-300">UC Davis Health - Alzheimer's Research Institute</h4>
              <ul className='list-disc ml-6 text-lg'>
                <li>Spearheading the enhancement of a cutting-edge remote caregiving tool (ICARE), enabling long-distance caregivers to monitor and support individuals with cognitive disabilities.</li>
                <li>Integrating HTML, CSS, JavaScript, and React with Firebase to create a seamless user experience with features such as video calling, real-time chats, an intuitive calendar, and customizable to-do alerts.</li>
              </ul>
            </VerticalTimelineElement>

            {/* Graduate Teaching Assistant */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: '#9F2B68', 
                color: '#fff', 
                borderRadius: '12px', 
                boxShadow: '0px 10px 20px rgba(0,0,0,0.5)' 
              }}
              contentArrowStyle={{ borderRight: '7px solid  linear-gradient(145deg, #1f2937, #2d3748)' }}
              date="Sept 2022 - June 2023"
              iconStyle={{ 
                background: '#3b82f6', 
                color: '#fff', 
                boxShadow: '0px 4px 12px rgba(0,0,0,0.5)' 
              }}
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              }
            >
              <h3 className="vertical-timeline-element-title text-2xl font-semibold">Graduate Teaching Assistant</h3>
              <h4 className="vertical-timeline-element-subtitle text-gray-300">UC Davis - Department Of Computer Science</h4>
              <ul className='list-disc ml-6 text-lg'>
                <li>Teaching Assistant for ECS 120 - Theory of Computation under various professors during the Fall '22, Winter '23, and Spring '23 quarters.</li>
                <li>Conducted weekly discussions and office hours, graded examinations, and proctored tests for over 200 students.</li>
              </ul>
            </VerticalTimelineElement>

            {/* Software Developer */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: '#6d28d9', 
                color: '#fff', 
                borderRadius: '12px', 
                boxShadow: '0px 10px 20px rgba(0,0,0,0.5)' 
              }}
              contentArrowStyle={{ borderRight: '7px solid  linear-gradient(145deg, #1f2937, #2d3748)' }}
              date="Aug 2020 - July 2022"
              iconStyle={{ 
                background: '#3b82f6', 
                color: '#fff', 
                boxShadow: '0px 4px 12px rgba(0,0,0,0.5)' 
              }}
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              }
            >
              <h3 className="vertical-timeline-element-title text-2xl font-semibold">Software Developer</h3>
              <h4 className="vertical-timeline-element-subtitle text-gray-300">FinIQ Consulting India Pvt Ltd</h4>
              <ul className='list-disc ml-6 text-lg'>
                <li>Lead developer for onboarding Goldman Sachs (GS) Equity Linked Investments onto the FinIQ EQ Connect platform.</li>
                <li>Implemented Java, WCF services using C# and .NET, integrating 9 counterparties onto the FinIQ platform, reducing post-trade latency by 50%.</li>
              </ul>
            </VerticalTimelineElement>

            {/* Project Intern at BMC Software */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: '#9F2B68', 
                color: '#fff', 
                borderRadius: '12px', 
                boxShadow: '0px 10px 20px rgba(0,0,0,0.5)' 
              }}
              contentArrowStyle={{ borderRight: '7px solid  linear-gradient(145deg, #1f2937, #2d3748)' }}
              date="Aug 2019 - June 2020"
              iconStyle={{ 
                background: '#3b82f6', 
                color: '#fff', 
                boxShadow: '0px 4px 12px rgba(0,0,0,0.5)' 
              }}
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              }
            >
              <h3 className="vertical-timeline-element-title text-2xl font-semibold">Project Intern</h3>
              <h4 className="vertical-timeline-element-subtitle text-gray-300">BMC Software</h4>
              <ul className='list-disc ml-6 text-lg'>
                <li>Developed a Full Text Search (FTS) microservice, decoupling it from the Action Request server, enhancing system scalability and performance.</li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
