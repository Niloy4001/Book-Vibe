import React, { useEffect, useState } from 'react';
import { getStoredReadList } from '../utility';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from './ReadList';

const ListedBooks = () => {

    const allBooks = useLoaderData()
    const [readList, setReadList] = useState([])
    



    useEffect(() => {
        const storedReadList = getStoredReadList()


        const readBooks = allBooks.filter((item) => storedReadList.includes(item.id))
        setReadList(readBooks)
    }, [])



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
                            readList.map((item)=> <ReadList readList={item}></ReadList>)
                        }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default ListedBooks;