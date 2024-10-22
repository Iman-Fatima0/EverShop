import React from 'react'

function About() {
  return (
    <div className='flex flex-wrap'>
        <h1 className='text-gray-600  font-extrabold'>ABOUT US</h1>
        <p className='m-2 text-gray-500 py-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec turpis at arcu consequat dictum. In eu euismod quam. Praesent ut finibus risus. Ut eu aliquet libero, non ornare nisl. Aenean gravida urna at ligula viverra, sed pharetra ante pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque efficitur a mi eget hendrerit. Quisque tortor lorem, aliquet eget feugiat ac, volutpat et lorem. Integer porta luctus leo et interdum. Morbi porta diam sem, sit amet porta lectus iaculis ac.</p>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/426b9a98646599.5ee0e80067ccb.jpg" className='h-screen h-cover w-full'></img>
        <p className='m-2 py-7  text-gray-500'>Donec lacinia malesuada orci, vitae tempor tortor volutpat in. Nullam tempor ex vel eros varius bibendum. Fusce non risus ut ligula mollis molestie. Quisque vel pretium elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam sed lectus luctus, auctor diam nec, varius diam. Sed id tortor at sem hendrerit aliquam</p>
    </div>
  )
}

export default About