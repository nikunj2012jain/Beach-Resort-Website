import React from 'react'
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';//this is a default image
import PropTypes from "prop-types";

export default function Room({ room }) {
    const { name, slug, images, price } = room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single room" />
                {/*even though we have alt, it won't look good on the website and thus we have a default image which will be shown in case the link to original source is broken*/}
                <div className="price-top">
                    <h6>Rs.{price}</h6> {/*CHANGE THE PRICE TO RUPPEES IN DATA!!!*/}
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                    {/* slug is the link to the room that has been obtained as an object above*/}
                    Features
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    );
}

//PROPTYPES!!!????

Room.propTypes = {
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired
    })
}


