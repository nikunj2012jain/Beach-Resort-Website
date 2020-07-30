import React from 'react';
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <>
            <Hero>
                <Banner title="Error: 404" subtitle="page not found">
                    <Link to="/">
                        {/* the className btn-primary could be directly added to link, would have done the same thing */}
                        <button className="btn-primary">return Home</button>
                    </Link>
                </Banner>
            </Hero>
        </>
    )
}
