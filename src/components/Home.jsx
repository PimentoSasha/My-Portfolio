import React from 'react'
// import profilePic2 from "../assets/GC.jpg"
import profilePic2 from "../assets/flowers4.jpg"

const Home = () => {

// Function to handle the code button click and open the URL in a new tab
const handleResumeButtonClick = () => {
    // Use window.open() to open the URL in a new tab
    window.open('https://drive.google.com/file/d/1t-Jj0Tc6IaI8D8FbUi6bgGljJJ5BOe1n/view?usp=sharing', '_blank');
  };

  return (
    <div name="home" className=" w-full bg-gradient-to-b from-black via-black to-gray-800 h-screen">
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-2 md:flex-row'>

                <div className='flex flex-col justify-center h-full'>
                    <h2 className="text-4xl sm:text-4xl font-bold text-white">Aspiring Software Developer</h2>
                    {/* <p className='  text-gray-500 py-4 max-w-md text-lg'> Hi There! Welcome to my Portfolio! I am currently pursuing my Masters in Computer Science at UC Davis and working as a Graduate Student Researcher 
                        under Dr. Alyssa Weakley at the UC Davis Alzheimer's Disease Research Center. <br></br> <br></br> 
                        Currently I'm on the lookout for Software Engineer/ Software Developer roles starting June 2024 
                        and am excited to find opportunities where I can use my skills and knowledge to work on cool projects and collaborate with great people. 
                        If you think there might be a good fit, I'd love to chat! */}
                        <p className= ' text-justify text-white py-4 max-w-md text-lg'>

                        I discovered the true meaning of Software Development, while pursuing my Masters. This got me motivated to work and think about what I truly want to achieve. So, here it is: you may have heard people talk about their passion for their work countless times, but for me, it's about a burning desire to innovate, to push boundaries, and to think beyond conventional limits. I aspire to "Make A Difference" </p>
                    <div>
                    <button className='group text-white w-fit px-6 py-2 my-2 flex items-center rounded-md  bg-sky-500 hover:bg-sky-700'
                    onClick={() => handleResumeButtonClick()}>
                            Resume 
                     </button>
                    </div>
                    <div>
                        {/* <button className='group text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                        
                        <span className='group-hover:rotate-90 duration-300'>
                           <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>    
                        </button> */}
                    </div>
                </div>

                <div><img src={profilePic2} 
                alt="My Profile" 
                className='hidden md:block md:max-w-md md:rounded-2xl md:h-80 md:border '/></div>
                {/* className='rounded-2xl mx-auto h-auto md:max-w-md '/></div> */}
                {/* w-2/3 md:w-full need to change width for phone  */}
            </div>
    </div>
  )
}

export default Home