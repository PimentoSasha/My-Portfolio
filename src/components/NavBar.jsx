/** rafce command used to create components using React-Native snippet tool*/
import React,{useState} from 'react'
import { FaBars,FaTimes } from "react-icons/fa"; //fa stands for font awesome
//FaBars gives a hamburger menu icon
//FaTimes gives cross icon

const NavBar = () => {
//Creating an array of Links for the Navbar
  const [nav, setNav] = useState(false)
  const links=[
    {
        id:1,
        link:'home'
    },
    {
        id:2,
        link:'About'
    },
    {
        id:3,
        link:'Projects'
    },
    {
        id:4,
        link:'Experience'
    },
    {
        id:5,
        link:'Contact'
    }
  ]
  return (
    /* px: padding on left and right */
    <div className='flex justify-between items-center
     w-full h-20 px-4 text-white bg-black fixed z-50 '> 
     <div>
     <h1 className="text-3xl font-signature ml-2">Sasha Neil Pimento</h1>   
    </div>
    {/* Since tail wind is designed for mobile apps, by default we keep the navbar hidden, 
    but if media size>768 px, we display it */}
    <ul className='hidden md:flex'> 

        {links.map(({ id, link })=>(
             <li key= {id} className='px-6 cursor-pointer capitalize font-medium 
             text-gray-500 text-2xl hover:scale-150 duration-200 hover:text-white'>
             {link}
             </li>
        ))}
    </ul>
      {/*Creating navbar for mobile view */}
      {/*  Using set state to check state of hamburger, Initially state is false, so it displays hamburger menu else it displays cross */}
      <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden '>
        {nav ? <FaTimes size={30}/> :<FaBars size={30}/>}
    </div>
    {/* If nav is true, then display navbar */}
    {nav && (
         <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
         {links.map(({ id, link })=>(
              <li key= {id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
              {link}
              </li>
         ))}
          <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>Home</li>
        </ul>
    )}
     </div>
  )
}

export default NavBar