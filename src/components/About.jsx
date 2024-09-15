import React from 'react';
import football_main from "../assets/football_main.jpg";
import golfcart from "../assets/golfcart.jpg";
import me from "../assets/mee.jpg";
import sari from "../assets/sari.jpg";
import sing1 from "../assets/sing1.jpg";
import Carousel from "./Carousel";
import backgroundVideo from "../assets/background.mp4"; // Add your video here

const slides = [
    me,
    sari,
    golfcart,
    football_main,
    sing1
];

const About = () => {
  return (
    <div name="about" className='relative w-full h-screen'>
        {/* Background video */}
        <video 
            autoPlay 
            loop 
            muted 
            className="absolute inset-0 w-full h-full object-cover z-0"
        >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className='relative flex flex-row w-full h-screen bg-black bg-opacity-50 text-white'>
            <div className='hidden md:flex p-4 mx-16 my-20 flex-col w-full max-w-lg'>
                <Carousel autoSlide={true}>
                    {slides.map((s) => (
                        <img src={s} alt="" />
                    ))}
                </Carousel>
            </div>

            <div className='p-4 mx-auto justify-center w-full max-w-screen-lg z-10'>
                {/* Add spacing from the navbar */}
                <div className="mt-16 pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
                </div>
                <p className='text-lg text-justify'>
                    I'm currently pursuing my Master's in Computer Science at UC Davis and am actively looking for Software Engineer/ Software Developer roles starting March 2025. I am excited to find opportunities where I can use my skills and knowledge to work on cool projects and collaborate with great people. 
                    If you think there might be a good fit, I'd love to chat!
                </p>
                <br />
                <br />

                {/* Skills Section */}
                <div className="w-full md:h-1/3 p-4">
                    <div className="pb-8">
                        <div className="flex items-center justify-center">
                            <p className='text-2xl font-bold inline border-b-2 border-gray-500'>Skills</p>
                        </div>

                        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 text-center py-8'>
                            <div className='bg-gradient-to-r from-purple-500 to-indigo-600 p-6 rounded-xl shadow-lg'>
                                <p className='font-bold text-lg'>Languages</p>
                                <p>Java, C#, Python, C, C++</p>
                            </div>
                            <div className='bg-gradient-to-r from-green-400 to-teal-500 p-6 rounded-xl shadow-lg'>
                                <p className='font-bold text-lg'>Technologies & Frameworks</p>
                                <p>HTML, CSS, JavaScript, React.js, Node.js, .NET</p>
                            </div>
                            <div className='bg-gradient-to-r from-pink-500 to-red-500 p-6 rounded-xl shadow-lg'>
                                <p className='font-bold text-lg'>Databases</p>
                                <p>SQL, Firebase, Microsoft SQL Server, MongoDB</p>
                            </div>
                           {/* Centered Developer & Other Tools card */}
                        <div className='col-span-full flex justify-center'>
                            <div className='bg-gradient-to-r from-blue-400 to-purple-600 p-6 rounded-xl shadow-lg'>
                                <p className='font-bold text-lg'>Developer Tools</p>
                                <p>Git, GitHub, Eclipse, Visual Studio, VS Code, Jenkins, Octopus Deploy, Docker, Jira, Jupyter Notebook</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
