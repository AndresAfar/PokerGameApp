import React from 'react'

import {Link, NavLink} from 'react-router-dom'

export const Home = () => {
  return (
    <div className='bg-white h-full w-full p-8'>
        <div className='p-4'>
            <span className='text-gray-800 text-5xl font-bold'>Poker Game</span>
        </div>



        <button type='button' href="#about-me" className='text-black px-3 py-2 border border-sky-800 rounded hover:bg-sky-700 hover:text-white hover:-translate-y-0.5 transition duration-150'>
            <Link to='/login'>
                Iniciar Sesion
            </Link>
        </button>        
    </div>
  )
}
