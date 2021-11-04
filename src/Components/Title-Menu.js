import React from 'react';
import { Link } from 'react-router-dom';

export class TitleMenu extends React.Component {
    render () {

        return (
            <div className="tm-container">
                <div className="tm-h1">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="iconbox">
                <Link to={'/dashboard'}>
                    <img src="rover.png" alt="rover" title="Dashboard"/>
                </Link>
                <Link to={'/contacts'}>  
                    <img src="astro.png" alt="astronaut" title="Contacts"/>
                </Link>
                <Link to={'/messages'}> 
                    <img src="satellite.png" alt="satellite" title="Messages"/>
                </Link>
                </div>
            </div>
        )
    }
}