import React, { Component } from 'react'
import items from './data';
// import Client from './Contentful';


// Client.getEntries({
//     content_type: "beachResortRoom"
// }).then(response => console.log(response.items));

const RoomContext = React.createContext();
//<RoomCotext.Provider value={'Hello'}

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,  //won't be visible right now, but if we host it, while the website loads we'll see this gif.
        type: 'all',
        capacity : 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,   //it will be calculated from the rooms available from the other filters applied    ****woooooaaaaaahhhh****
        minSize: 0,
        maxSize: 0,    //same as maxPrice
        breakfast: false,
        pets: false
    }


    //YE SAB CONTENTFUL KE LIYE

    // getData = async ()=>{
    //     try{
    //         let response = await Client.getEntries({
    //             content_type: "beachResortRoom",
    //             order: "sys.createdAt"
    //         });
    //         let rooms =this.formatData(response.items); //yaha change hai
    //         let featuredRooms =rooms.filter(rooms=>rooms.featured===true); //agar feature vaali property data mein true hai, it will be added to this array 'rooms'.
            
    //         /*IMPORTANT -> use of MATH library*/
    //         let maxPrice = Math.max(...rooms.map(item => item.price));
    //         let maxSize = Math.max(...rooms.map(item => item.size));
        
    
    //     this.setState({
    //         rooms,
    //         featuredRooms,
    //         sortedRooms: rooms,//copying everything from room array to sortedRooms
    //         loading: false, //so that gif stops showing once the data has been completely loaded.
    //         price: maxPrice,
    //         maxPrice,
    //         maxSize
    //     })
    //     }
    //     catch(error)
    //     {
    //         console.log(error);
    //     }
    // }

    // componentDidMount(){
    //     this.getData();
    // }
 


    //FOR LOCAL DATA!!!!!!!!  : 

    componentDidMount(){
        let rooms =this.formatData(items);
        let featuredRooms =rooms.filter(rooms=>rooms.featured===true); //agar feature vaali property data mein true hai, it will be added to this array 'rooms'.
        
        /*IMPORTANT -> use of MATH library*/
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        
    
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,//copying everything from room array to sortedRooms
            loading: false, //so that gif stops showing once the data has been completely loaded.
            price: maxPrice,
            maxPrice,
            maxSize
        })
    }


    formatData(items){
        let tempItems =items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            // isse id aur images flatten out ho gaye hai,matlab inme directly store ho gaye hai

            let room = {...item.fields, images, id};
            return room;
        });
        return tempItems;
    }

    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug===slug);
        //difference between find function and filter function -> Find function returns the first matching result, whereas a filter function would have returned an array and we would have had to extract our value from this array
        return room;
    }
    /*VERY IMPORTANT: */
    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        console.log(name, value);
    
        this.setState(
          {
            [name]: value
          },
          this.filterRooms
        );
      };

      filterRooms = () => {
            let {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
            } = this.state;

            //all the rooms
            let tempRooms = [...rooms];

            // transform values
            // get capacity
            capacity = parseInt(capacity); //we are using parseInt to convert the string type input from the select box into an integer, to be used for sorting in "filter by capacity"  (upar 'state' mein vo string k form mein stored hai)

            price = parseInt(price); //same as "capacity"

            // filter by type
            if (type !== "all") {
            tempRooms = tempRooms.filter(room => room.type === type);
            //agar all hai to fir to saare hee display honge.
            //If something other than all is chosen, we filter the array room so that only the ones having the chosen type are rendered on the screen
            }

            // filter by capacity
            if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
            }
            
            // filter by price
            tempRooms = tempRooms.filter(room => room.price <= price);

            //filter by size
            tempRooms = tempRooms.filter(
            room => room.size >= minSize && room.size <= maxSize
            );

            //filter by breakfast
            if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
            }

            //filter by pets
            if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true);
            }

            //sabse IMPORTANT
            this.setState({
            sortedRooms: tempRooms
            });
        };
    render() {
        return (
            <RoomContext.Provider value={{ ...this.state,getRoom:this.getRoom, handleChange: this.handleChange }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}

export { RoomProvider, RoomConsumer, RoomContext };