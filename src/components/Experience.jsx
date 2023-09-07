import React from 'react'

const Experience = () => {
  return (
    <div  name="experience" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-[200vh]'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
    <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
        {/* <p className='text-3xl py-6'>Some of the projects I have worked</p> */}
    </div>


<ol class="relative border-l border-gray-200 dark:border-gray-700">                  
    <li class="mb-10 ml-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-2xl  font-semibold text-white dark:text-white">Graduate Research Assistant</h3>
        <h4 class="flex items-center mb-1 text-1xl  font-semibold text-gray-400 dark:text-white">UC Davis Health - Alzheimer's Research Institute</h4>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May, 2023 -- Present </time>
        <ul class="list-outside list-disc ml-6  text-justify"> 
        <li>Spearheading the enhancement of a cutting-edge remote caregiving tool - ICARE, enabling long-distance caregivers to
            monitor and support activities of individuals with cognitive disabilities</li>
        <li>Integrating HTML, CSS, JavaScript, and React with Firebase, to create a seamless user experience with features such as
            video calling, real-time chats, an intuitive calendar, and customizable to-do alerts</li>
        </ul>
       
    </li>
    <li class="mb-10 ml-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-2xl  font-semibold text-white dark:text-white">Graduate Teaching Assistant</h3>
        <h4 class="flex items-center mb-1 text-1xl  font-semibold text-gray-400 dark:text-white">UC Davis - Department Of Computer Science</h4>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sept, 2022 -- June, 2023 </time>
        <ul class="list-outside list-disc ml-6  text-justify"> 
        <li>Teaching Assistant for ECS 120 - Theory of Computation in the Fall '2022 quarter under Professor Yelena Frid and in the Winter '2023 quarter under Professor 
            David Doty and in the Spring '2023 quarter under Professor Phillip Rogaway in the Department of Computer Science .</li>
        <li>Conducted weekly discussion and office hours sessions for students and worked on grading and proctoring of examinations</li>
        </ul>
       
    </li>

    <li class="mb-10 ml-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-2xl  font-semibold text-white dark:text-white">Software Developer</h3>
        <h4 class="flex items-center mb-1 text-1xl  font-semibold text-gray-400 dark:text-white">FinIQ Consulting India Pvt Ltd</h4>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Aug, 2020 -- July, 2022 </time>
        <ul class="list-outside list-disc ml-6  text-justify"> 
        <li>Development of an email parsing service using Java jsoup libraries which reduced the overall latency of the post trade process by 50%</li>
         <li>Lead Developer for the onboarding of Goldman Sachs(GS) Equity Linked Investments(ELI) on the FinIQ EQ Connect platform. </li>    
          <li>Implemented Java, WCF services using C# and .NET  with Microsoft SQL Server at the backend to onboard and integrate 9 counterparties onto the
            FinIQ EQ Connect platform facilitating pricing, order, and restate flows for Liechtenstein Global Trust (LGT)</li>
           <li>Facilitated B2B sessions between developer teams of concerned buy-sides and sell-sides located internationally, resolving issues through collaborative problem solving
            </li> 
        </ul>    
    </li>

    <li class="mb-10 ml-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-2xl  font-semibold text-white dark:text-white">Project Intern</h3>
        <h4 class="flex items-center mb-1 text-1xl  font-semibold text-gray-400 dark:text-white">BMC Software</h4>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Aug, 2019 -- June, 2020 </time>
        <ul class="list-outside list-disc ml-6  text-justify"> 
        <li>Decoupled the Full Text Search(FTS) component from the Action Request server and deployed it as a powerful microservice
            using Java, Spring Framework and REST API calls, thus accomplishing a strategic architectural enhancement</li>
        <li>Reduced load on server by optimizing system resources and improving scalability of the FTS service</li> 
        </ul>   
    </li>

    <li class="mb-10 ml-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-2xl  font-semibold text-white dark:text-white">Business Intelligence Studio Intern</h3>
        <h4 class="flex items-center mb-1 text-1xl  font-semibold text-gray-400 dark:text-white">SLB (Schlumberger Limited)</h4>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June, 2019 -- June, 2019 </time>
        <ul class="list-outside list-disc ml-6  text-justify"> 
        <li>Collaborated with the IT Manager to utilize Power BI to track misplaced laptops via barcode scanning, 
            resulting in the creation of detailed reports displaying the contact information and office location of the laptop’s respective owner.</li>
          <li>Conducted various presentations discussing the different techniques for Connecting to PDF in Power BI in Schlumberger's edition of Power BI Friday on the Schlumberger Yammer Platform. The discussion was open to all employees in Kuala Lumpur, India and Abu Dhabi.</li>   
        </ul>   
    </li>
    
</ol>

    
    
  </div>  

</div>
  )
}

export default Experience