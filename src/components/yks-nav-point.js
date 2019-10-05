import React from 'react';
import '../styles/yks-nav-point.css';

class YksNavPoint extends React.Component {
    render() {
        return (
            <div className="yks-nav-point-container">
                { this.props.children }
            </div>
        );
    }
}

export default YksNavPoint;