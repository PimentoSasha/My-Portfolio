import React from 'react'
import profilePic2 from "../assets/GC.jpg"
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row'>

                <div className='flex flex-col justify-center h-full'>
                    <h2 className="text-4xl md:text-7xl font-bold text-white">I am a Software Developer</h2>
                    <p className='text-gray-500 py-4 max-w-md text-lg'> Hi There! Welcome to my Portfolio! I am currently pursuing my Masters in Computer Science at UC Davis and working as a Graduate Student Researcher 
                        under Dr. Alyssa Weakley at the UC Davis Alzheimer's Disease Research Center. <br></br> <br></br> 
                        Currently I'm on the lookout for Software Engineer/ Software Developer roles starting June 2024 
                        and am excited to find opportunities where I can use my skills and knowledge to work on cool projects and collaborate with great people. 
                        If you think there might be a good fit, I'd love to chat!
                    </p>
                    <div>
                        <button className='group text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                        {/* Surrounding icon in span so we can use animation */}
                        <span className='group-hover:rotate-90 duration-300'>
                           <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>   
                        </button>
                    </div>
                </div>

                <div><img src={profilePic2} 
                alt="My Profile" 
                className='rounded-2xl mx-auto h-auto md:max-w-md '/></div>
                {/* w-2/3 md:w-full need to change width for phone  */}
            </div>
    </div>
  )
}

export default Home