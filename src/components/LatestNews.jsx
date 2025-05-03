import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-2'>
            <p className='bg-secondary text-white px-3 py-2 '>Latest</p>
           <Marquee className='flex gap-5' pauseOnHover>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, explicabo?</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, explicabo?</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, explicabo?</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, explicabo?</p>
           </Marquee>
            
        </div>
    );
};

export default LatestNews;