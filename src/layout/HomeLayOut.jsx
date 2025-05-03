import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import LeftAsset from '../asset/LeftAsset';
import RightAsset from '../asset/RightAsset';

const HomeLayOut = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <section className='latest mx-auto w-11/12'>
                    <LatestNews></LatestNews>
                </section>
                <section className='nav my-9 mx-auto w-11/12'>
                    <Navbar></Navbar>
                </section>
            <main className='mx-auto w-11/12 my-9 grid grid-cols-12 gap-5'>
          
                <section className='left asset col-span-3'>
                    <LeftAsset></LeftAsset>
                </section>
              <section className='col-span-6'>
              <Outlet></Outlet>
              </section>
                <section className='right asset col-span-3'>
                    <RightAsset></RightAsset>
                </section>
            </main>
        </div>
    );
};

export default HomeLayOut;