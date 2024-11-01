import React, { useEffect, useState } from 'react';
import { getStoredReadList } from '../utility';
import { useLoaderData } from 'react-router-dom';

const ListedBooks = () => {

    const allBooks = useLoaderData()
    const [readList, setReadList] = useState([])



    useEffect(() => {
        const storedReadList = getStoredReadList()
    

        const readBooks = allBooks.filter((item)=> storedReadList.includes(item.id))
        setReadList(readBooks)
    }, [])



    return (
        <div>

        </div>
    );
};

export default ListedBooks;