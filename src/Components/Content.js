import React from 'react'
import ImageOne from '../Images/egg.jpg'
import ImageTwo from '../Images/egg-2.jpg'
const Content = () => {
    return (
        <>
        <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
        <img src={ImageOne} alt="" className='h-full rounded mb-20 shadow'/>
         <div className='flex flex-col justify-center items-center'>
           <h2 className='text-2xl mb-2 '>
           Egg Toast </h2>

           <p className='mb-2'>
               Crunchy, Tasty and Healthy !
           </p>
           <span>
               $16
           </span>
         </div>
        </div>
        

        <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
        <img src={ImageTwo} alt="" className='h-full rounded mb-20 shadow'/>
         <div className='flex flex-col justify-center items-center'>
           <h2 className='text-2xl mb-2 '>
           Egg Toast  </h2>

           <p className='m'>
               Crunchy, Tasty and Healthy !
           </p>
           <span>
               $20
           </span>
         </div>
        </div>
    </>
    );

}

export default Content
