import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {faBagShopping} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
function NavBar() {
    const[s,sets]=useState(false);
    const[b,bset]=useState(false);
    const[u,uset]=useState(false);
const search=()=>
{
    sets(true)
}
const bag=()=>
{
 bset(true);
}
const user=()=>
{
    uset(true);
}
  return (
    <div className='flex flex-wrap'>
        <ul className='flex flex-row  mb-4 space-x-4'>
        <Link to='/Home'><li>Home</li></Link>
        <Link to='/About'><li className='hover:text-gray-400'>About</li></Link>
        <Link to='/Home'><li><img src="https://miro.medium.com/v2/resize:fit:1400/1*O1PczSw1u_Zm4-pnckqvIg.png" className='h-10 w-20 ml-96'></img></li></Link>
        <li onClick={search} className='pl-96'><FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer" /></li> 
        {
            s? <input type='text' placeholder='search..' className='border h-9 border-gray-200 border-solid rounded-lg shadow-lg bg-gray-200 text-gray-400' />: null
        }
        <li onClick={bag}><FontAwesomeIcon icon={faBagShopping} style={{color: "#B197FC",}} className="cursor-pointer" /></li>
        {
            b? <div className=' mt-2 border border-solid rounded-lg bg-gray-200 text-gray-400 px-10 py-2 shadow-lg '>CART EMPTY <br></br>
            <Link to='/Home'><button className='text-[9px] hover:text-black'><u>CONTINUE SOPPING</u></button></Link></div>:null
        }
        <li onMouseUp={user}><FontAwesomeIcon icon={faUser} style={{color:"1ac6bf"}} className="cursor-pointer"/></li>
        {
            u? <prompt className="text-xs font-serif ">Sorry We are currently not accepting sign Ups!</prompt>:null
        }
        </ul>
    </div>
  )
}

export default NavBar