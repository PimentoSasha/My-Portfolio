import React from 'react'
import Stats from '../assets/portfolio/global.jpg'
import Space from '../assets/portfolio/space1.jpg'
import Stockhub from '../assets/portfolio/stockhub.png'
import ICARE from '../assets/portfolio/ICARE.jpg'
import backgroundVideo from '../assets/background.mp4';
import ResUI from "../assets/RES.png";

const Portfolio = () => {
  const portfolios = [
    {
        id: 1,
        src: ResUI,
        text: 'View on Github',
        codeURL: 'https://github.com/ResilientApp/ResUI'
      },
    {
      id: 2,
      src: ICARE,
      text: 'About I-CARE',
      codeURL: 'https://health.ucdavis.edu/news/headlines/tool-to-support-long-distance-caregivers-gets-funding-boost/2023/02'
    },
    {
        id: 3,
        src: Stats,
        text: 'View on Github',
        codeURL: 'https://github.com/PimentoSasha/STA-220-Covid-and-Layoff-Data-Analysis-Dashboard'
      },
    {
      id: 4,
      src: Space,
      text: 'View on Github',
      codeURL: 'https://github.com/PimentoSasha/Space-Invaders'
    },
    
    {
      id: 5,
      src: Stockhub,
      text: 'View on Github',
      codeURL: 'https://github.com/PimentoSasha/StockHub'
    },
  ]

  const handleCodeButtonClick = (id, codeUrl) => {
    window.open(codeUrl, '_blank');
  };

  return (
    <div name="portfolio" className='relative w-full min-h-screen'>
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: -1 }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='absolute inset-0 '> {/* Darkened overlay */}
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-white'>Portfolio</p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolios.map(({ id, src, codeURL, text }) => (
              <div key={id} className='shadow-lg rounded-lg overflow-hidden border-4 border-[#5A2D81] bg-[#3C0075] flex flex-col items-center h-[350px]'>
                <img src={src} alt="" className='w-full h-2/3 object-cover' />
                <div className='p-4 flex flex-col items-center justify-center h-1/3'>
                  <button
                    className='px-6 py-3 text-lg rounded-md border border-pink-500 bg-pink-500 text-white hover:bg-pink-900 transition duration-300'
                    onClick={() => handleCodeButtonClick(id, codeURL)}
                  >
                    {text}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio