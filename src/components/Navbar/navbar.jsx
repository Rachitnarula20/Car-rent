import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className='bg-cyan-100 rounded-xl flex p-2 ml-7 mr-7'>
    <div className='bg-white rounded-xl flex items-center px-2 w-[330px] ml-10'>
   
    <input className='bg-transparent p-1 focus:outline-none w-full'  type='text' placeholder='Search...'></input>
    <AiOutlineSearch size={20} />
    </div>
    </div>
  )
}

export default Navbar
