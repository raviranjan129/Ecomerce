import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdShoppingCart } from "react-icons/md";
import { IoGitCompareSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));


const Header = () => {

  
 
  return (
    <div className='w-full pt-5 bg-white'>
       <div className='top-strip py-2 border-t-[2px] border-gray-300 border-b-[2px] w-full'>
         <div className='w-full'>
             <div className='flex items-center justify-between w-full'>
                  <div className='col1 w-1/2 pl-2'>
                     <p className='text-[14px]'>
                          Get up to 50% off new Season styles,limited time only
                     </p>
                  </div>

                 <div className='col2 w-1/2 flex items-center justify-end pr-2'>
                       <ul className='flex items-center gap-3'>
                         <li className='list-none'>
                            <Link to="help-center" className='text-[15px] hover:text-[#ff5252] transition'>Help center</Link>
                         </li>
                         <li className='list-none'>
                            <Link to="order-tracking" className='text-[15px] hover:text-[#ff5252] transition'>Order Tracking</Link>
                         </li>

                         <li className='list-none'>
                            <Link to="order-tracking" className='text-[15px] hover:text-[#ff5252] transition'>Order Tracking</Link>
                         </li>
                       </ul>
                 </div>
             </div>
         </div>
       </div>

       <div className='header border-b-[1px] border-gray-250 py-3 w-full '>
           <div className='w-full'>
               <div className='flex items-center justify-between w-full'>
                    <div className='col1 w-[25%] pl-2'>
                        <img src="../../Screenshot 2025-04-12 142610.png" alt="" className='max-w-full' />
                    </div>
                    <div className='col2 w-[45%]'>
                        <Search/>
                    </div>
                    <div className='col3 w-[30%] flex items-center pl-7'>
                      <ul className='flex items-center justify-end mr-15 gap-3 w-full'>
                          <li className='list-none'>
                            <Link to="/login" className='text-[15px] hover:text-[#ff5252] transition' >Login</Link>/
                            <Link to="/register " className= 'text-[15px] hover:text-[#ff5252] transition' >Register</Link>
                          </li>

                          <li>
                            <Tooltip title="Compare">
                          <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
       <IoGitCompareSharp/>
      </StyledBadge>
    </IconButton>
    </Tooltip>
                          </li>
                          
                          <li>
                            <Tooltip title="WishList">
                          <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
       <FaRegHeart/>
      </StyledBadge>
    </IconButton>
    </Tooltip>
                          </li>

                          <li>
                            <Tooltip title="Cart">
                          <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
       <MdShoppingCart/>
      </StyledBadge>
    </IconButton>
    </Tooltip>
                          </li>
                      </ul>
                    </div>
               </div>
           </div>
       </div>

   <Navigation/>

    </div>
  )
}

export default Header
