import React, { Component } from 'react'
import deafaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../Context'
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        // here, props has the properties stored of the room that is being shown (use console log to see for yourself). In params, we had stored "slug" which is unique for each and every room. Thus, once we extract this slug name from the above prop, it can be used to extract all the properties of the room chosen.
        this.state = {
            slug: this.props.match.params.slug,
            deafaultBcg
        }
    }
    static contextType = RoomContext;

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        //if the entered url (slug) is incorrect, room will be undefined and hence react would show error. Thus to avoid that, we ourselves display the error on the screen
        if (!room) {
            return (
                <div className="error">
                    <h3>no such room could be found...</h3>
                    <Link to='/rooms' className="btn-primary">Back to Rooms</Link>
                </div>
            )
        }
        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
        } = room;

        const [mainImg, ...otherImages] = images; //we destructured the images array to separate out the first image.

        return (
            <>
                {/* Hero */}

                <StyledHero img={images[0] || this.state.deafaultBcg} > {/*so the images that were imported above from 'room' are now passed as props to this component*/}
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className="btn-primary">back to rooms</Link>
                    </Banner>
                </StyledHero>

                {/* display images */}

                <section className="single-room" >
                    <div className="single-room-images">
                        {/* {images.map((item,index) => {
                        return(
                            <img key={index} src={item} alt={name} />
                        )
                    })} */} {/*if you want to show all the 4 images, just run a map on the images array destructured earlier from 'room'*/}
                        {otherImages.map((item, index) => {
                            return (
                                <img key={index} src={item} alt={name} />
                            )
                        })}

                    </div>


                    {/*room info*/}

                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            {/*change the price to rupees*/}
                            <h6>price : Rs.{price}</h6>
                            <h6>size : {size} sq.ft.</h6>
                            <h6>
                                max capacity :{" "}
                                {capacity > 1 ? `${capacity} people` : `${capacity} person`} {/*we cannot write 1 people, thus the condition.*/}
                            </h6>
                            <h6>
                                {pets ? "pets allowed" : "no pets allowed"}
                            </h6>
                            <h6>
                                {breakfast && "free breakfast included"}
                                {/*here we have used the and property so that this info is visible on the screen if and only if free breakfast is included*/}
                            </h6>
                        </article>
                    </div>
                </section>

                {/*Room Extras*/}

                <section className="room-extras">
                        <h6>Extras</h6>
                        <ul className="extras">
                            {extras.map((item,index)=>{
                                return(
                                    <li key={index}>- {item}</li>
                                )
                            })}
                        </ul>
                        
                </section>
            </>
        )
    }
}
