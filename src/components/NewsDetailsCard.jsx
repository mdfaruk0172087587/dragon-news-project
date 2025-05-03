import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({newsFind}) => {
   const {details, title, image_url, category_id} = newsFind;
    return (
        <div className='border p-2 space-y-3'>
            <h1 className='text-2xl font-bold my-4'>Dragon News</h1>
            <img className='w-full object-cover h-[400px]' src={image_url} alt="" />
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p>{details}</p>
            <Link to={`/category/${category_id}`} className='btn btn-secondary px-3 py-1'>All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;