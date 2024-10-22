import React from 'react'
import Herosection from '../Components/Herosection'
import Shopcol from '../Components/Shopcol'
import Featuredproducts from '../Components/Featuredproducts'
import NavBar from '../Components/Navbar'
function Home() {
  return (
    <div>
        <Herosection/>
        <Shopcol/>
        <Featuredproducts/>
    </div>
  )
}

export default Home