import React from 'react'

function Featuredproducts() {
  return (
  <div className='flex  flex-row space-x-10 m-20'>
    <h1 className='font-extrabold'>F E A T U R E D<h1 className='text-yellow-500 text-2xl '> P R O</h1>  D U C T S</h1>
    <div className="relative flex flex-col gap-3 p-4 w-56 bg-gray-800 rounded-lg">
      <div className="relative overflow-hidden cursor-pointer z-5 w-full h-32 bg-purple-800 rounded-md bg-[url('https://speedsports.pk/cdn/shop/products/aurora_fb2207-004_phslh000-2000.jpg?v=1710212910')] bg-cover bg-center">
        {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 fill-gray-300">
          <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
        </svg> */}
      </div>

      <div className="overflow-hidden w-full text-lg font-semibold text-gray-300 capitalize whitespace-nowrap overflow-ellipsis">
        NIKE
      </div>

      <div className="text-sm text-gray-300">
        Size
        <ul className="flex items-center gap-1 mt-1">
          {[37, 38, 39, 40, 41].map(size => (
            <li key={size} className="list-none">
              <button className="item-list-button cursor-pointer py-1 px-2 bg-gray-700 text-gray-300 border-2 border-gray-700 rounded transition duration-300 ease-in-out hover:border-gray-300 focus:bg-purple-600 focus:border-purple-900 focus:ring focus:ring-purple-300">
                {size}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold text-gray-300">$299</div>
        <button className="flex items-center justify-center gap-1 px-4 py-2 w-full bg-gradient-to-t from-purple-600 to-gray-700 text-gray-300 font-medium border-2 border-transparent rounded-md shadow-md hover:border-gray-300">
          <svg className="cart-icon w-4" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
      <div className="relative flex flex-col gap-3 p-4 w-56 bg-gray-800 rounded-lg">
      <div className="relative overflow-hidden cursor-pointer z-5 w-full h-32 bg-purple-800 rounded-md bg-[url('https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png')] bg-cover bg-center">
        {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 fill-gray-300">
          <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
        </svg> */}
      </div>

      <div className="overflow-hidden w-full text-lg font-semibold text-gray-300 capitalize whitespace-nowrap overflow-ellipsis">
        NIKE
      </div>

      <div className="text-sm text-gray-300">
        Size
        <ul className="flex items-center gap-1 mt-1">
          {[37, 38, 39, 40, 41].map(size => (
            <li key={size} className="list-none">
              <button className="item-list-button cursor-pointer py-1 px-2 bg-gray-700 text-gray-300 border-2 border-gray-700 rounded transition duration-300 ease-in-out hover:border-gray-300 focus:bg-purple-600 focus:border-purple-900 focus:ring focus:ring-purple-300">
                {size}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold text-gray-300">$399</div>
        <button className="flex items-center justify-center gap-1 px-4 py-2 w-full bg-gradient-to-t from-purple-600 to-gray-700 text-gray-300 font-medium border-2 border-transparent rounded-md shadow-md hover:border-gray-300">
          <svg className="cart-icon w-4" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
      <div className="relative flex flex-col gap-3 p-4 w-56 bg-gray-800 rounded-lg">
      <div className="relative overflow-hidden cursor-pointer z-5 w-full h-32 bg-purple-800 rounded-md bg-[url('https://i8.amplience.net/i/jpl/jd_457704_a?qlt=92&w=600&h=425&v=1&fmt=auto')] bg-cover bg-center">
        {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 fill-gray-300">
          <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
        </svg> */}
      </div>

      <div className="overflow-hidden w-full text-lg font-semibold text-gray-300 capitalize whitespace-nowrap overflow-ellipsis">
        NIKE
      </div>

      <div className="text-sm text-gray-300">
        Size
        <ul className="flex items-center gap-1 mt-1">
          {[37, 38, 39, 40, 41].map(size => (
            <li key={size} className="list-none">
              <button className="item-list-button cursor-pointer py-1 px-2 bg-gray-700 text-gray-300 border-2 border-gray-700 rounded transition duration-300 ease-in-out hover:border-gray-300 focus:bg-purple-600 focus:border-purple-900 focus:ring focus:ring-purple-300">
                {size}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold text-gray-300">$450</div>
        <button className="flex items-center justify-center gap-1 px-4 py-2 w-full bg-gradient-to-t from-purple-600 to-gray-700 text-gray-300 font-medium border-2 border-transparent rounded-md shadow-md hover:border-gray-300">
          <svg className="cart-icon w-4" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
      <div className="relative flex flex-col gap-3 p-4 w-56 bg-gray-800 rounded-lg">
      <div className="relative overflow-hidden cursor-pointer z-5 w-full h-32 bg-purple-800 rounded-md bg-[url('https://media.wired.com/photos/63728604691ed08cc4b98976/master/pass/Nike-Swoosh-News-Gear.jpg')] bg-cover bg-center">
        {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 fill-gray-300">
          <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
        </svg> */}
      </div>

      <div className="overflow-hidden w-full text-lg font-semibold text-gray-300 capitalize whitespace-nowrap overflow-ellipsis">
        NIKE
      </div>

      <div className="text-sm text-gray-300">
        Size
        <ul className="flex items-center gap-1 mt-1">
          {[37, 38, 39, 40, 41].map(size => (
            <li key={size} className="list-none">
              <button className="item-list-button cursor-pointer py-1 px-2 bg-gray-700 text-gray-300 border-2 border-gray-700 rounded transition duration-300 ease-in-out hover:border-gray-300 focus:bg-purple-600 focus:border-purple-900 focus:ring focus:ring-purple-300">
                {size}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold text-gray-300">$1999</div>
        <button className="flex items-center justify-center gap-1 px-4 py-2 w-full bg-gradient-to-t from-purple-600 to-gray-700 text-gray-300 font-medium border-2 border-transparent rounded-md shadow-md hover:border-gray-300">
          <svg className="cart-icon w-4" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
    </div>

  )
}

export default Featuredproducts