import React from 'react';

function Shopcol() {
  return (
    <div className='flex flex-wrap flex-row space-x-24 ml-32 mt-20'>
      <div className="relative w-[250px] h-[254px] hover:h-[260px] hover:w-[255px] hover:shadow-purple-300 hover:shadow-2xl rounded-[50px] bg-gray-300 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
        <h1 className='text-wrap flex flex-row pl-4 pt-14 text-xl font-semibold text-gray-500'>KIDS SHOES <br /> COLLECTION</h1> 
        <p className='text-wrap text-xs text-gray-500 flex flex-wrap m-4'>Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.</p>
        <button className='absolute bottom-4 right-4 border-solid rounded-full bg-gray-400 text-white font-bold 
                           transition-all duration-600 hover:bg-gradient-to-r 
                           hover:from-indigo-500 hover:via-purple-500 hover:to-gray-300 flex items-center p-2 text-xs'>
          SHOP
        </button>
      </div>

      <div className="relative w-[250px] h-[254px] hover:h-[260px] hover:w-[255px] hover:shadow-purple-300 hover:shadow-2xl rounded-[50px] bg-gray-300 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
        <h1 className='text-wrap flex flex-row pl-4 pt-14 text-xl font-semibold text-gray-500'>WOMEN SHOES <br /> COLLECTION</h1> 
        <p className='text-wrap text-xs text-gray-500 flex flex-wrap m-4'>Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.</p>

        <button className='absolute bottom-4 right-4 border-solid rounded-full bg-gray-400 text-white font-bold 
                           transition-all duration-600 hover:bg-gradient-to-r 
                           hover:from-indigo-500 hover:via-purple-500 hover:to-gray-300 flex items-center p-2 text-xs'>
          SHOP
        </button>
      </div>

      <div className="relative w-[250px] h-[254px] hover:h-[260px] hover:w-[255px] hover:shadow-purple-300 hover:shadow-2xl rounded-[50px] bg-gray-300 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
        <h1 className='text-wrap flex flex-row pl-4 pt-14 text-xl font-semibold text-gray-500'>MEN SHOES <br /> COLLECTION</h1> 
        <p className='text-wrap text-xs text-gray-500 flex flex-wrap m-4'>Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.</p>

        <button className='absolute bottom-4 right-4 border-solid rounded-full bg-gray-400 text-white font-bold 
                           transition-all duration-600 hover:bg-gradient-to-r 
                           hover:from-indigo-500 hover:via-purple-500 hover:to-gray-300 flex items-center p-2 text-xs'>
          SHOP
        </button>
      </div>
    </div>
  );
}

export default Shopcol;
