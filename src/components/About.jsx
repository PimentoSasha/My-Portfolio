import React from 'react'
import football_main from "../assets/football_main.jpg"
import golfcart from "../assets/golfcart.jpg"
import me from "../assets/mee.jpg"
import sari from "../assets/sari.jpg"
import sing1 from "../assets/sing1.jpg"
import Carousel from "./Carousel"

const slides=[
    me,
    sari,
    golfcart,
    football_main,
    sing1
]

const About = () => {
  return (
    // <div name="about" className='flow-root w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white '>
        <div name="about" className='flex flex-row w-full h-[130vh] bg-gradient-to-b from-gray-800 to-black text-white  -z-10'>
        
            {/* <div className='max-w-lg  w-1/2'> */}
            <div className='hidden md:flex p-4 mx-16 my-20 flex-col w-full max-w-lg'>
                <Carousel autoSlide={true}>
                    {slides.map((s)=>(
                        <img src={s} alt="" />
                    ))}
                </Carousel>
            </div>

            {/* <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full '> */}
            <div className='p-4 mx-auto justify-center  w-full max-w-screen-lg'>
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
            </div>
            <p className='text-lg  text-justify'>
            I'm currently pursuing my Masters in Computer Science at UC Davis. I am also working as a Graduate Student Researcher at the UC Davis Alzheimer's Disease Research Center under the guidance of Dr Alyssa Weakley. 
            </p>
            <br />   
            <p className='text-lg  text-justify'>
            I'm actively looking for Software Engineer/ Software Developer roles starting June 2024  and am excited to find opportunities where I can use my skills and knowledge to work on cool projects and collaborate with great people. 
            If you think there might be a good fit, I'd love to chat!
            </p>
            <br />
            <p className='text-lg  text-justify'>
            P.S. I also like to sing, dance, and play soccer in my free time. It would be great to connect and chat about our common interests!
            </p> <br /> 

            <div class="box-border w-full md:h-1/3  p-4 border-4">
            <div className="pb-8">
                <div class="flex items-center justify-center">
                <p className='text-2xl font-bold inline border-b-2 border-gray-500 '>Skills</p>
                </div>

                <div className='text-lg'>
                <p className='font-bold inline border-b-2 border-gray-500'> Languages, Technologies & Frameworks:</p><br></br> <p>Java, Python, C, C++, HTML, CSS, JavaScript, Tailwind.css, SQL,  Firebase, Netlify, React.js, Node.js, Express.js
                </p>
                </div>
                <br></br>
                <div className='text-lg'>
                <p className='font-bold inline border-b-2 border-gray-500'>Developer Tools:</p><br></br> 
                <p>Eclipse, Visual Studio, VS Code, Git, Github, Docker, Jira, Jupyter Notebook, Microsoft SQL Server Management Studio</p>
                </div>
                

            </div>

            </div>

        </div>

    </div>
  )
}

export default About