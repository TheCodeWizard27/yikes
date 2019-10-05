import React from 'react';
import '../styles/yks-nav.css'

class YksNav extends React.Component {
    
    render() {

        let points = this.props.children.map((child, i) => <div key={child.props.title}>{child.props.title}</div>);

        return (
            <div className="yks-nav-container">
                <div className="yks-nav-points-container">
                    <div className="yks-nav-points">
                        { points }
                    </div>
                </div>
                { this.props.children }
            </div>
        );
    }
}

export default YksNav;