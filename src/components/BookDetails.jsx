import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const books = useLoaderData()
    const { id } = useParams()

    const element = books.find((item) => item.id == id)

    const { bookName, author, image, rating, category, tags, review, yearOfPublishing, publisher, totalPages } = element;

    console.log(element);


    return (
        <div>
            {/* left div/ img div */}
            <div></div>
            {/* details/ info div */}
            <div></div>
        </div>
    );
};

export default BookDetails;