import React from 'react';
import '../styles/yks-nav.css'

class YksNav extends React.Component {

    constructor(props){
        super(props);

        this._refMap = new Map();
    }

    render() {

        this._refMap.clear();
        // Clone Children and add references to them.
        let children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                ref: (ref) => this._refMap.set(child.props.title, ref)
            });
        });

        let points = children.map((child) => (
            <button className="yks-nav-point"
                key={child.props.title}
                onClick={(e) => this.scrollToPoint(child)}>
                {child.props.title}
            </button>
        ));

        return (
            <div className="yks-nav-container">
                <div className="yks-nav-points-container">
                    <div className="yks-nav-points">
                        {points}
                    </div>
                </div>
                {children}
            </div>
        );
    }

    scrollToPoint(point) {
        // Scroll point into view.
        let ref = this._refMap.get(point.props.title)._ref.current;
        ref.scrollIntoView({block: "end", behavior: "smooth"});
    }
}

export default YksNav;