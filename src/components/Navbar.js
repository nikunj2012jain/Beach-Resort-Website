import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from "react-router-dom"

export default class Navbar extends Component {

    //these are functions to show or hide the '3-line button' on the navigation bar when you make the screen smaller or larger
    state = {
        isOpen: false
    };
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Beach Resort" />
                            {/* the logo has already been imported from the images folder */}
                        </Link>
                        <button type="button" className="nav-btn">
                            <FaAlignRight className="nav-icon" onClick={this.handleToggle}/>
                            {/* this is the name of the icon that has been used in the navigation bar, imported after installing "react-icons" */}
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"show-nav nav-links":"nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
