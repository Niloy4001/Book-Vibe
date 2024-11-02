import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addReadListToLS, addWhishListToLS } from '../utility';


const BookDetails = () => {
    const books = useLoaderData()
    const bookId = useParams()

    const element = books.find((item) => item.id == bookId.id)

    const { id, bookName, author, image, category, rating, tags, review, yearOfPublishing, publisher, totalPages } = element;

    // console.log(element);


    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-9 py-10 md:py-28'>
            {/* left div/ img div */}
            <div className='flex justify-center'>
                <img src={image} alt="" className='h-[350px] md:h-[400px] lg:h-[564px] ' />
            </div>
            {/* details/ info div */}
            <div>
                <h1 className='font-bold  text-xl md:text-2xl text-[#131313] mb-4'>{bookName} </h1>
                <p className='font-medium  text-xs md:text-base text-[#131313CC] mb-6'>By : {author} </p>
                <p className='font-medium  text-sm md:text-lg text-[#131313CC] mb-6'>{category} </p>
                <p className='font-medium  text-xs md:text-base text-[#131313CC] mb-6'>
                    <span className='font-bold  text-sm md:text-base text-[#131313]'>Review :</span>{review}
                </p>
                <div className='flex gap-5 mb-5'>
                    <span className='font-bold  text-sm md:text-base text-[#131313]'>Tag : </span>
                    {
                        tags.map((item, index) => <button key={index} className='btn btn-xs font-medium  text-xs md:text-base text-[#23BE0A]'> {item} </button>)
                    }
                </div>
                <div className='grid grid-cols-3 mb-3'>
                    <p className='text-[#131313B3] text-sm md:text-base font-normal'>Number of Pages:</p>
                    <p className='font-semibold  text-sm md:text-base text-[#131313]'>{totalPages}</p>
                    <p></p>
                </div>
                <div className='grid grid-cols-3 mb-3'>
                    <p className='text-[#131313B3] text-sm md:text-base font-normal'>Publisher:</p>
                    <p className='font-semibold  text-sm md:text-base text-[#131313]'>{publisher}</p>
                    <p></p>
                </div>
                <div className='grid grid-cols-3 mb-3'>
                    <p className='text-[#131313B3] text-sm md:text-base font-normal'>Year of Publishing:</p>
                    <p className='font-semibold  text-sm md:text-base text-[#131313]'>{yearOfPublishing}</p>
                    <p></p>
                </div>
                <div className='grid grid-cols-3 mb-6'>
                    <p className='text-[#131313B3] text-sm md:text-base font-normal'>Rating:</p>
                    <p className='font-semibold  text-sm md:text-base text-[#131313]'>{rating}</p>
                    <p></p>
                </div>
                <div className='flex gap-4'>
                    <button
                        onClick={() => addReadListToLS(id)}
                        className="btn bg-[#23BE0A]  text-white hover:bg-transparent hover:text-black">Mark as Read
                    </button>
                    <button
                        onClick={() => addWhishListToLS(id)}
                        className="btn bg-[#50B1C9] text-white hover:bg-transparent hover:text-black">Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;