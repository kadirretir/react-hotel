import React from 'react';
import Content from '../components/Content/Content';
import Hero from '../components/Hero/Hero';
import Offer from '../components/Offer/Offer';
import Rooms from '../components/Rooms/Rooms';
import Contact from '../components/Contact/Contact';

function Home() {
    return (
        <>
        <Hero /> 
        <Content />
        <Offer />
        <Rooms />
        <Contact />
        </>
    )
}

export default Home
