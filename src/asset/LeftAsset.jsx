import React, { use } from 'react';
import {NavLink } from 'react-router';

const categoriesPromise = fetch('/categories.json').then(res => res.json())
const LeftAsset = () => {
    const categories = use(categoriesPromise);
    return (
        <div>
            <h1 className='font-bold mb-5'>All Category ({categories.length})</h1>
           <div className='flex flex-col'>
           {
                categories.map(category => <NavLink key={category.id} className='btn mb-2 bg-base-100 border-none hover:bg-base-200 ' to={`/category/${category.id}`}>{category.name}</NavLink>)
            }
           </div>
        </div>
    );
};

export default LeftAsset;