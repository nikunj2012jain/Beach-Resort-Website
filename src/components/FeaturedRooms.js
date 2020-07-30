import React, { Component } from "react";
import Title from "./Title";
import { RoomContext } from "../Context";
import Room from "./Room";
import Loading from "./Loading";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map(room => {
        //  is being called separately for each and every room, i.e. thrice in our case ( because 3 images are marked as featured:true)
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}