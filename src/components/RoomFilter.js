import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";
// get all unique values
// set bilkul C++ vaale jaisa hai
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
 
const RoomsFilter = ({ rooms }) => {
  // react hooks
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");
  // add all  (ek all vaala option bhi chahiye humein dropdown mein)
  types = ["all", ...types];
  // map to jsx  (type naam ka pura dropdown hee bana diya!)
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let people = getUnique(rooms, "capacity"); //bilkul type jaisa hee hai, iss baar bus getUnique function ko number of guests k liye use kiya hai
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">

        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {/* iss dropdown k liye ek tareeka hai ki hum saare options khud hee set karde-jaise single,double,etc. but hum aisa nhi karna chahte. Hum ek aisa function banayenge jo hur data k types se saari unique values nikal le, (ek C++ ke set jaise) */}
            {types}
          </select>
        </div>
        {/* end of select type */}

        {/* guests  */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          {/* when we get values from the select box, they are in the form of a string. Thus, we need to do parsing to convert it back to integer type */}
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>
        {/* end of guests */}

        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price Rs.{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price*/}

        {/* size */}
        <div className="form-group">
          <label htmlFor="price">room size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of select type */}

        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>

          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div>
        {/* end of extras type */}
        
      </form>
    </section>
  );
};

export default RoomsFilter;