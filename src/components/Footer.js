import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center items-center bg-black h-[26.6875rem] text-white'>
      <div className='flex justify-around items-start flex-wrap w-full'>
        <div className='flex flex-col gap-2'>
          <h3><a href="" className='text-lg text-left font-semibold mb-4'>Services</a></h3>
          <a href=""><span>Home</span></a>
          <a href=""><span>About</span></a>
        </div>
        <div className='flex flex-col gap-2'>
          <h3><a href="" className='text-lg text-left font-semibold mb-4'>Categories</a></h3>

          <a href=""><span>Ads</span></a>
          <a href=""><span>Custom A.I Avatar</span></a>
          <a href=""><span>Educational</span></a>
          <a href=""><span>Brand Editorial</span></a>
          <a href=""><span>Podcast</span></a>
          <a href=""><span>Events</span></a>
          <a href=""><span>Drone</span></a>
        </div>
        <div>
          <h3 class="text-lg text-left font-semibold mb-4"><a href="">Contact Us</a></h3>


          <p className='text-base mb-1'>info@bouboulena.com</p>
          <div className='flex flex-col items-start mb-6 mt-5'>
            <h3 className='text-base text-left  mb-4'>or fill out your email here and we will be in<br></br> touch with you.</h3>
            <form action="">
              <div className='mb-4 border-[#ccc border-b'>
                <input type="email" placeholder="email@email.com" className='w-full focus-outline-none py-2 bg-transparent border-none rounded-md text-gray-400 focus:ring-0' />
              </div>
              <div className='text-center cursor-pointer border'>
                <button class="placeholder:text-whitetext-white w-full py-2 px-4 cursor-pointer rounded-md outline-none" type="submit">Submit</button>
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>
  )
}


export default Footer
