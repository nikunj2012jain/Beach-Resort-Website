import React from 'react'
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';


export default function Home() {
    return (
        <>

            <Hero /*we do not specify hero because we are using the default class*/>
                <Banner title="Jade Beach Resort" subtitle="Welcome to Jade. A Maldives island resort that offers more than just sun, sand and sea! A resort full of surprises, fun activities, lively entertainment and smiling faces that are sure to give your Maldives holiday so much more.">
                    <Link to="/rooms" className="btn-primary">
                        Our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    )
}
