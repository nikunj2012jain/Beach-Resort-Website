import React from 'react';
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomContainer from "../components/RoomContainer";

function Rooms() {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="our rooms">
            <Link className="btn-primary" to="/">Return Home</Link>
            </Banner>
        </Hero>
        <RoomContainer />
        </>
    )
}

export default Rooms
