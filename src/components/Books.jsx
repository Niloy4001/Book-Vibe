import React from 'react';
import Book from './Book';

const Books = ({books}) => {
    // console.log(books);
    
    return (
        <div className='mt-11 md:mt-24 '>
            <h1 className='font-bold text-2xl md:text-[40px] text-[#131313] text-center gap-6 mb-9 md:mb-20'>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                books.map((item)=> <Book key={item.id} book={item}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;