import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookName, author, image, rating, category, tags,id } = book;
    // console.log(book);

    return (
        <div className='p-6'>
            <Link to={`/bookDetails/${id}`}>
                <div className='h-[230px] bg-[#F3F3F3] rounded-2xl flex justify-center py-10 mb-5'>
                    <img src={image} className='h-full w-[30%]' alt="" />
                </div>
                <div className='flex gap-5 mb-5'>
                    {
                        tags.map((item, index) => <button key={index} className='btn btn-xs font-medium  text-xs md:text-base text-[#23BE0A]'> {item} </button>)
                    }
                </div>
                <h1 className='font-bold  text-xl md:text-2xl text-[#131313] mb-4'>{bookName} </h1>
                <p className='font-medium  text-xs md:text-base text-[#131313CC] mb-6'>By : {author} </p>
                <div className='font-medium  text-xs md:text-base text-[#131313CC] flex justify-between items-center'>
                    <p>{category} </p>
                    <p>
                        <span className='mr-2'>{rating} </span>
                        <span className="rating rating-xs">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </span>
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default Book;