import React from 'react'
import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder="Search" className="input input-bordered rounded-full" />
        <button className='btn btn-circle bg-sky-800' type = "submit" >
        <FaSearch  className='w-5 h-5 outline-none '/>  
        </button>
    </form> 
    
  ) 
}

export default SearchInput

// 