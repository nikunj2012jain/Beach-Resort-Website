import React, { Component } from 'react'
import Title from './Title'
//import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import ServicesData from '../Data1/ServicesData';

export default class Services extends Component {
    render() {
        return (
            <section className="services">
                <Title title="Services"></Title>
                <div className="services-center">
                   { ServicesData.map((item,index)=>{
                        return (
                            <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                            </article>
                        );
                   })}
                   </div>
                
            </section>
        );
    }
}
