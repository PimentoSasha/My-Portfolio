import React from 'react'
import flower from "../assets/flowers.jpg"
import football from "../assets/football.jpg"
import golfcart from "../assets/golfcart.jpg"
import me from "../assets/mee.jpg"
import sari from "../assets/sari.jpg"
import sing from "../assets/sing.jpg"
import afro from "../assets/afro.jpg"
import dance from "../assets/dance.jpg"
import canada from "../assets/profilePic2.jpg"
import Carousel from "./Carousel"

const slides=[
    afro,
    me,
    football,
    sari,
    golfcart,
    dance,
]

const About = () => {
  return (
    // <div name="about" className='flow-root w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white '>
        <div name="about" className='flex flex-row w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white '>
        
            {/* <div className='max-w-lg  w-1/2'> */}
            <div className='p-4 mx-16 flex flex-col w-full max-w-lg'>
                <Carousel autoSlide={true}>
                    {slides.map((s)=>(
                        <img src={s} />
                    ))}
                </Carousel>
            </div>

            {/* <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full '> */}
            <div className='p-4 mx-auto justify-center  w-full max-w-screen-lg'>
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
            </div>
            <p className='text-xl'>
            I'm currently pursuing my Masters in Computer Science at UC Davis. During my first year, I worked as a Graduate Teaching Assistant for ECS 120 - Theory Of Computation and am currently working as a Graduate Student Researcher at the UC Davis Alzheimer's Disease Research Center under Professor Alyssa Weakley. We are developing a comprehensive remote caregiving tool for individuals with cognitive disabilities, which leverages HTML, CSS, and JavaScript with Firebase integration to enable seamless video calling, real-time chats, an intuitive calendar, and customizable to-do alerts     
            </p>
            <br />  
            <p className='text-xl'>
            My passion lies in Software Development, and I've been lucky to have worked for two years at a Singapore based fintech company. It was an eye-opening experience, and I got to see how trading platforms work. 
            In my free time I enjoy singing, dancing and playing soccer.
            </p>

            <br />
            <p className='text-xl'>
            Right now, I'm on the lookout for roles as a Software Engineer or Software Developer. I'm excited to find opportunities where I can use my skills and knowledge to work on cool projects and collaborate with great people. If you think there might be a good fit or just want to chat, I'd love to connect!
            </p>
            <br />

        </div>

    </div>
  )
}

export default About