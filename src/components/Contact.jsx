import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-indigo-400 to-indigo-900 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full mt-12'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-8 border-white'>Contact Me</p>
            <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>
        <div className='flex justify-center items-center '>
            <form action="https://getform.io/f/1426f122-8950-4b22-bf95-1f218b4854f6"
             method='POST'
             className='flex flex-col w-full md:w-1/2'>
                <input type="text" name='name' placeholder='Enter your name'
                className='p-2 bg-transparent border-2 border-white rounded-md text-white
                focus:outline-none' />
                 <input type="text" name='email' placeholder='Enter your email'
                className='my-4 p-2 bg-transparent border-2 border-white rounded-md text-white
                focus:outline-none' />
                 <textarea name='message' 
                 placeholder='Enter your message'
                 rows='10'
                className='p-2 bg-transparent border-2 border-white rounded-md text-white
                focus:outline-none' />
                <button className='text-white bg-gradient-to-b from-blue-400
                to-blue-900 px-6 py-3 my-8 mx-auto flex items-center rounded-md 
                hover:scale-110 duration-300'> Let's Talk!</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Contact
