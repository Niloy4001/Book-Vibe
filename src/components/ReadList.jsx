import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { FaRegFileLines } from "react-icons/fa6";

const ReadList = ({ readList }) => {


    const { bookName, author, image, category, rating, tags, review, yearOfPublishing, publisher, totalPages } = readList;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 items-center'>
            {/* image div */}
            <div className='flex justify-center bg-[#1313130D] rounded-3xl p-6 col-span-1 md:col-span-1 lg:col-span-1'>
                <img src={image} className='w-[230px] h-[230px] ' alt="" />
            </div>
            {/* content div */}
            <div className='col-span-1 md:col-span-1 lg:col-span-3'>
                <h1 className='font-bold  text-xl md:text-2xl text-[#131313] mb-4'>{bookName} </h1>
                <p className='font-medium  text-xs md:text-base text-[#131313CC] mb-6'>By : {author} </p>
                <div className='flex flex-col md:flex-row items-start gap-2 md:gap-5 mb-5'>
                    <span className='font-bold  text-sm md:text-base text-[#131313]'>Tag : </span>
                    {/* <button className='btn btn-xs font-medium  text-xs md:text-base text-[#23BE0A]'>Identity</button>
                    <button className='btn btn-xs font-medium  text-xs md:text-base text-[#23BE0A]'>Identity</button> */}
                    {
                        tags.map((item, index) => <button key={index} className='btn btn-xs font-medium  text-xs md:text-base text-[#23BE0A]'> {item} </button>)
                    }
                    <p className='flex gap-2 items-center'><span><CiLocationOn /></span><span>Year of Publishing: {yearOfPublishing}</span></p>
                </div>
                <div className='flex gap-5 mb-5'>
                    <p className='flex gap-2 items-center'><span><LuUsers /></span><span>Publisher: {publisher}</span></p>
                    <p className='flex gap-2 items-center'><span><FaRegFileLines /></span><span>Page: {totalPages}</span></p>
                </div>

                <div className='font-medium  text-xs md:text-base text-[#131313CC] flex gap-2 md:gap-4 items-start md:items-center flex-col md:flex-row'>
                    <p className='btn btn-sm bg-[#328EFF26] rounded-full text-[#328EFF]'>{category} </p>
                    <p className='text-orange-400'>Rating : {rating}</p>
                    <p className='btn btn-sm bg-[#23BE0A] text-white rounded-full'>View Details</p>
                </div>
            </div>
        </div>
    );
};

export default ReadList;