import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import Offer from '../components/Offer';
import Rooms from '../components/Rooms';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
        <Hero /> 
        <Content />
        <Offer />
        <Rooms />
        <Contact />
        <Footer />
        </>
    )
}

export default Home
