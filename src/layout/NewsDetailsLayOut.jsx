import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Header from '../components/Header';
import RightAsset from '../asset/RightAsset';
import NewsDetailsCard from '../components/NewsDetailsCard';

const NewsDetailsLayOut = () => {
    const data = useLoaderData();
    const {id} = useParams();
   const newsFind = data.find(news => news.category_id == id)
   
    return (
        <div>
           <header>
            <Header></Header>
           </header>
           <main className='grid grid-cols-12 w-11/12 mx-auto gap-5 mb-8'>
            <section className='col-span-9 '>
                <NewsDetailsCard newsFind ={newsFind}></NewsDetailsCard>
            </section>
            <aside className='col-span-3'>
                <RightAsset></RightAsset>
            </aside>
           </main>
        </div>
    );
};

export default NewsDetailsLayOut;