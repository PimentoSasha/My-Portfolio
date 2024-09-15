import React from 'react'
// import profilePic2 from "../assets/GC.jpg"
import profilePic2 from "../assets/flowers4.jpg"
import backgroundVideo from "../assets/background.mp4";

const Home = () => {

// Function to handle the code button click and open the URL in a new tab
const handleResumeButtonClick = () => {
    // Use window.open() to open the URL in a new tab
    window.open('https://drive.google.com/file/d/1MawFVBDCOHyX1uwv0edOn17mpLROuPRd/view?usp=sharing', '_blank');
  };

  return (
    <div name="home" className="relative w-full h-screen">
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
           {/* Content on top of the video */}
             <div className="relative z-10 max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-2 md:flex-row bg-black bg-opacity-20">

                <div className='flex flex-col justify-center h-full'>
                    <h2 className="text-4xl sm:text-4xl font-bold text-white">Innovative Software Engineer</h2>
                    {/* <p className='  text-gray-500 py-4 max-w-md text-lg'> Hi There! Welcome to my Portfolio! I am currently pursuing my Masters in Computer Science at UC Davis and working as a Graduate Student Researcher 
                        under Dr. Alyssa Weakley at the UC Davis Alzheimer's Disease Research Center. <br></br> <br></br> 
                        Currently I'm on the lookout for Software Engineer/ Software Developer roles starting June 2024 
                        and am excited to find opportunities where I can use my skills and knowledge to work on cool projects and collaborate with great people. 
                        If you think there might be a good fit, I'd love to chat! */}
                        <p className= ' text-justify text-white py-4 max-w-md text-lg'>

                        Welcome! I'm a Master’s student in Computer Science at UC Davis, deeply engaged in developing technologies that push boundaries. My work spans across fields like FinTech, HealthTech, Blockchain, and AI, and I’m driven by a strong desire to create software that solves real-world problems while setting new industry standards. I thrive in collaborative environments, and I'm always eager to learn, improve, and share ideas with like-minded innovators. If you're looking for a developer ready to make an impact, let’s connect and bring bold ideas to life! </p>
                    <div>
                    <button className='group text-white w-fit px-6 py-2 my-2 flex items-center rounded-lg  bg-pink-500 hover:bg-purple-500'
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
                className='hidden md:block md:max-w-md md:rounded-2xl md:h-80 md:border md:mb-12"'/></div>
                {/* className='rounded-2xl mx-auto h-auto md:max-w-md '/></div> */}
                {/* w-2/3 md:w-full need to change width for phone  */}
            </div>
    </div>
  )
}

export default Home