import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const [categoryNews, setCategoryNews] = useState([])
    const data = useLoaderData();
    const {id} = useParams();
   

    useEffect(() => {
        if(id == '0'){
            setCategoryNews(data)
            return;
        }
        if(id== '1'){
            const newsFilter = data.filter(news => news.others.is_today_pick ==true);
            setCategoryNews(newsFilter)
            return;
        }
        const newsFilter = data.filter(news => news.category_id == id)
        setCategoryNews(newsFilter)
    }, [data, id])
    
    return (
        <div>
            <h1 className='font-bold text-2xl mb-5'>Dragon News Home</h1>
           
           <div>
            {
                categoryNews.map(news => <NewsCard news={news} key={news.id}></NewsCard>)
            }
           </div>
        </div>
    );
};

export default CategoryNews;