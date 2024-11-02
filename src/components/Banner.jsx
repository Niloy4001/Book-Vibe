import React from 'react';
import banner from '../assets/banner.png'

const Banner = () => {
    return (
        <div className='py-5 px-5 lg:py-[80px] lg:px-[120px] bg-[#1313130D] rounded-3xl'>
            <div className='flex justify-center flex-col-reverse lg:flex-row items-center'>
                <div className='w-full lg:w-[60%] '>
                    <h1 className='text-2xl lg:text-[56px] font-bold text-[#131313] mb-6 md:mb-12 leading-6 md:leading-9 lg:leading-[60px]'>Books to freshen up your bookshelf</h1>
                    <button className='btn text-white bg-[#23BE0A]  hover:bg-transparent hover:text-black'>View The List</button>
                </div>
                <div className='w-full lg:w-[40%]  flex justify-center'>
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;