import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif';

export default function Loading() {
    return (
        <div className="loading">
            <h4>rooms data loading...</h4>
            <img src={loadingGif} alt="load ho raha hai!" />
        </div>
    );
}


//you can also use the gear gif from the images folder