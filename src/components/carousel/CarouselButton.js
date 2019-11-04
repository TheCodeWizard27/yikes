import React from 'react';


import '../../styles/main.css';
import '../../styles/style.css';

export default class CarouselButton extends React.Component {
    render(){
        return (
            <button className={this.props.className}>
                <p className="carousel-button-content">{this.props.buttonVal}</p>
            </button>
        );
    }
}