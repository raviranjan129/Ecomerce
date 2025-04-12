
import React from 'react'
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <div className='w-[100%] flex items-center justify-center h-[50px] bg-[#e5e5e5] rounded-[5px]  relative p-2 '>
      <input type='text' placeholder='Search for product ' className='w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px] ' />

      <Button className=''><FaSearch /></Button>
    </div>
  )
}

export default Search;
