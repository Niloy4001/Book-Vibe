import React, { useEffect, useState } from 'react';
import { getStoredReadList, getStoredWhishList } from '../utility';
import { MdKeyboardArrowDown } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from './ReadList';

const ListedBooks = () => {

    // const allBooks = useLoaderData()

    // console.log(allBooks);
    const [allBooks, setAllBooks] = useState([])

    const [readList, setReadList] = useState([])


    const [whishList, setWhishList] = useState([])

    const [sort, setSort] = useState();




    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => {
                if (sort === 'Ratings') {
                    setAllBooks(data.sort((a, b) => b.rating - a.rating))
                }
                else if (sort === 'Pages') {
                    setAllBooks(data.sort((a, b) => b.totalPages - a.totalPages))
                }
                else if (sort === 'Years') {
                    setAllBooks(data.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing))
                } else {
                    setAllBooks(data)
                }
            })
    })


    useEffect(() => {

        const storedReadList = getStoredReadList()
        const readBooks = allBooks.filter((item) => storedReadList.includes(item.id))
        setReadList(readBooks)

        const storedWhishList = getStoredWhishList()
        const whishBooks = allBooks.filter((item) => storedWhishList.includes(item.id))
        setWhishList(whishBooks)

    }, [allBooks])


    const handleSort = (value) => {
        setSort(value)

    }



    return (
        <div>
            <h1 className='font-bold text-2xl md:text-[40px] text-[#131313] text-center gap-6 mb-9 md:mb-20'>Books</h1>
            <div className="dropdown dropdown-bottom flex justify-center ">
                <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white flex gap-1 items-center hover:bg-transparent hover:text-black"><span>{`Sorted By ${sort || ''}`}</span> <span><MdKeyboardArrowDown /></span></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li className='hover:text-[#23BE0A]' onClick={() => handleSort('Ratings')}><button>Rating</button></li>
                    <li className='hover:text-[#23BE0A]' onClick={() => handleSort('Pages')}><button>Number of pages</button></li>
                    <li className='hover:text-[#23BE0A]' onClick={() => handleSort('Years')}><button>Publisher year</button></li>
                </ul>
            </div>
            <div className='mt-11'>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
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


        </div>
    );
};

export default ListedBooks;