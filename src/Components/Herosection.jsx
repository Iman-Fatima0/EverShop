import React from 'react';

function Herosection() {
  return (
    <div className="bg-purple-300 h-60 relative flex flex-wrap">

      <button 
        className="  absolute bottom-4 right-4 cursor-pointer text-white font-bold text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
      >
        SHOP NOW
      </button>
      <br></br>
      <br></br>
      <br></br>
      
      <h1 className='px-8 pt-10 justify-items-center left-4 text-6xl font-extrabold '><i>NIKE</i> </h1>
      <br></br>
      <br></br>
      <p className=' text-wrap text-sm px-8 text-gray-500 pb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      </div>
  
   
  );
}

export default Herosection;
