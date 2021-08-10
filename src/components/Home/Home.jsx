import React from 'react';
import Promotion from '../Promotion/Promotion';
import FeaturedPost from './FeaturedPost';
import Hero from './Hero';

function Home() {
    return (
        <>
            <Hero />
            <FeaturedPost />
            <Promotion />
        </>
    );
}

export default Home;