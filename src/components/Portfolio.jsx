import React from 'react'
import Stats from '../assets/portfolio/global.jpg'
import Space from '../assets/portfolio/space1.jpg'
import Stockhub from '../assets/portfolio/stockhub.png'
import ICARE from '../assets/portfolio/ICARE.jpg'




const Portfolio = () => {

 const portfolios=[
    {
        id:1,
        src:ICARE,
        text:'About I-CARE',
        codeURL:'https://health.ucdavis.edu/news/headlines/tool-to-support-long-distance-caregivers-gets-funding-boost/2023/02'
        
    },
    {
        id:2,
        src:Space,
        text:'View on Github',
        codeURL: 'https://github.com/PimentoSasha/Space-Invaders'
    },
    {
        id:4,
        src:Stats,
        text:'View on Github',
        codeURL: 'https://github.com/PimentoSasha/STA-220-Covid-and-Layoff-Data-Analysis-Dashboard'
        
    },
    {
        id:3,
        src:Stockhub,
        text:'View on Github',
        codeURL:'https://github.com/PimentoSasha/StockHub'
    },
 ]

 // Function to handle the code button click and open the URL in a new tab
 const handleCodeButtonClick = (id, codeUrl) => {
    window.open(codeUrl, '_blank');
  };

  return (<div  name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-[130vh]'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
    <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
        {/* <p className='text-3xl py-6'>Some of the projects I have worked</p> */}
    </div>

    <div className='grid sm:grid-cols-2 md:grid-cols-3 md:gap-14 gap-8 px-12 sm:px-0 border-white-500'>
    {    portfolios.map(({id,src,codeURL,text})=>(   
        <div key={id} className='shadow-md shadow-green-500 rounded-lg'>
            <img src={src} alt=""  className='rounded-md duration-200 hover:scale-105'  />
            <div className='flex items-center justify-center'>
                {/* <button className='w-1/2  px-6 py-3 m-4 duration-200 hover:scale-75 text-2xl'>About</button> */}
                <button className='px-6 py-3 m-4 duration-200 hover:scale-75 text-lg rounded-md  border border-white hover:bg-green-500' onClick={() => handleCodeButtonClick(id, codeURL)}>{text}</button>
            </div>
        </div>
    
        ))
    }
  
    

    </div>
    
  </div>  

</div>)
}

export default Portfolio