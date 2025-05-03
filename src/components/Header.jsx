import React from 'react';
import HeaderImage from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center my-9 space-y-2'>
            <img src={HeaderImage} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE , LLLL  d , yyyy")}</p>
            
        </div>
    );
};

export default Header;