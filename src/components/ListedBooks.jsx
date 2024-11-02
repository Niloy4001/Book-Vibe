import React, { useEffect, useState } from 'react';
import { getStoredReadList, getStoredWhishList } from '../utility';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from './ReadList';

const ListedBooks = () => {

    // const allBooks = useLoaderData()

    // console.log(allBooks);
    const [allBooks, setAllBooks] = useState([])

    const [readList, setReadList] = useState([])

    const [whishList, setWhishList] = useState([])


    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setAllBooks(data))
    })


    useEffect(() => {

        const storedReadList = getStoredReadList()
        const readBooks = allBooks.filter((item) => storedReadList.includes(item.id))
        setReadList(readBooks)

        const storedWhishList = getStoredWhishList()
        const whishBooks = allBooks.filter((item) => storedWhishList.includes(item.id))
        setWhishList(whishBooks)

    }, [allBooks])


    // useEffect(()=>{

    // },[])



    return (
        <div>
            <h1 className='font-bold text-2xl md:text-[40px] text-[#131313] text-center gap-6 mb-9 md:mb-20'>Books</h1>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    {
                        readList.map((item) => <ReadList readList={item} key={item.id}></ReadList>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        whishList.map((item) => <ReadList readList={item} key={item.id}></ReadList>)
                    }
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default ListedBooks;