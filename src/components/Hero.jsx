import React from 'react'
import {tshirt1,tshirt2,tshirt4,tshirt3,tshirt5,tshirt6,hero} from '../assets'


const Hero = () => {
  return (
    <section className='flex' >
        <div style={{backgroundImage: `url(${hero})`}} className='w-full min-h-[95vh] bg-no-repeat bg-cover bg-center flex items-center justify-center'>
        <h2 className='sm:text-5xl text-2xl text-white font-poppins font-light'> SALE | UP TO 50% </h2>
        </div>
        {/* <div style={{backgroundImage: `url(${tshirt3})`}} className='w-full min-h-[90vh] bg-center sm:bg-right-top  flex items-center justify-center'> 
        <h2 className='md:text-5xl text-2xl text-white font-poppins font-light'> FINAL CLEARANCE </h2>
        </div> */}
    </section>
  )
}

export default Hero