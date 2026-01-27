import React from 'react';
import Banner from '../../Components/Banner/Banner.jsx';
import Apps from '../Apps/Apps.jsx';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Apps data={data}></Apps>
        </div>
    );
};

export default Home;