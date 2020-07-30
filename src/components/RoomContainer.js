import React from 'react'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'
import {withRoomConsumer} from '../Context'
import Loading from './Loading'

function RoomContainer({context}){
    const {loading, sortedRooms, rooms} = context;
                    if(loading){
                        return <Loading />;
                    }
                    
                    return(
                        <div>
                            <RoomsFilter rooms={rooms} />
                            <RoomsList rooms={sortedRooms}/>
                        </div>);
}

export default withRoomConsumer(RoomContainer);

 









//we didn't do this, because in this way, to use value we would have had to write everything inside RoomConsumer, whichever component we are using. Now, we directly have enclose RoomConsumer within the function withRoomConsumer in the Context.js file.

// import React from 'react'
// import RoomsFilter from './RoomFilter'
// import RoomsList from './RoomList'
// import {RoomConsumer} from '../Context'
// import Loading from './Loading'

// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value)=>{ //this "value is the same as what we had used in the context page"

//                     const {loading, sortedRooms, rooms} = value
//                     if(loadig){
//                         return <Loading />;
//                     }
                    
//                     return(
//                         <div>
//                             Hello from Rooms Container
//                             <RoomsFilter rooms={rooms} />
//                             <RoomsList rooms={sortedRooms}/>
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
//     )
// }
