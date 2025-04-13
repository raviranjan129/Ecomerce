import Button from '@mui/material/Button';
import React from 'react';

import { BiMenuAltLeft } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { BsFillRocketTakeoffFill } from "react-icons/bs";

const Navigation = () => {
  return (
    <div className='flex items-center py-2 ml-5 gap-10'>
      <div className='col1 w-[20%] '>
        <Button className='!text-black gap-2 w-full'> <BiMenuAltLeft/> Shop By Categories <FaAngleDown className='text-[13px] ml-auto font-bold ' /></Button>
      </div>
      <div className='col2 w-[65%] '>
        <ul className='flex items-center gap-6'>
           <li className='list-none'>
               <Link to="/" className=' text-[14px] font-[500] hover:text-[#ff5252] transition' >Home</Link>
           </li>
           <li className='list-none'>
               <Link to="/" className=' text-[14px] font-[500] hover:text-[#ff5252] transition' >Fashion</Link>
           </li>
           <li className='list-none'>
               <Link to="/" className=' text-[14px] font-[500] hover:text-[#ff5252] transition' >Beauty</Link>
           </li>
           <li className='list-none'>
               <Link to="/" className=' text-[14px] font-[500] hover:text-[#ff5252] transition' >Electronics</Link>
           </li>
           <li className='list-none'>
               <Link to="/" className=' text-[14px] font-[500] hover:text-[#ff5252] transition' >Bags</Link>
           </li>
           <li className='list-none'>
               <Link to="/" className=' text-[14px] font-[500] hover:text-[#ff5252] transition' >Footwear</Link>
           </li>

           <li className='list-none'>
               <Link to="/" className=' text-[14px] font-[500] hover:text-[#ff5252] transition' >Groceries</Link>
           </li>
           <li className='list-none'>
               <Link to="/" className=' text-[14px] font-[500] hover:text-[#ff5252] transition' >wellness</Link>
           </li>

           <li className='list-none'>
               <Link to="/" className=' text-[14px] font-[500] hover:text-[#ff5252] transition' >Jewellery</Link>
           </li>

        </ul>
      </div>

      <div className='w-[15%]'>
       <p className='text-[15px] font-[500] flex items-center gap-3 mb-0 mt-0 '> <BsFillRocketTakeoffFill className='text-[18px]'/> Free International Delivery</p>
      </div>
      
    </div>
  )
}

export default Navigation
