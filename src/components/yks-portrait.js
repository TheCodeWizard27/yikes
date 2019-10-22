import React from 'react';
import '../styles/yks-portrait.css';

class YksPortrait extends React.Component {

    render() {
        return (
            <div className="yks-portrait-container">
                <div className="yks-portrait-img-container">
                    <img className="yks-portrait" src={this.props.imageSrc}/>
                    <div className="yks-portrait-img-shadow"></div>
                </div>
                {this.props.children}
            </div>
        )
    }

}

export default YksPortrait;