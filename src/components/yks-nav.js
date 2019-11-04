import React from 'react';
import evaluateOrDefault from '../helper/evaluate-or-default';
import '../styles/yks-nav.css'

class YksNav extends React.Component {

    constructor(props) {
        super(props);

        this._refMap = new Map();
        this.state = {
            isNavVisible: false
        };
    }

    render() {

        this._refMap.clear();
        // Clone Children and add references to them.
        let children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                ref: (ref) => this._refMap.set(child.props.title, ref)
            });
        });

        let navStateClass = this.state.isNavVisible ? 'open' : 'closed';
        let points = children
            .filter(child => evaluateOrDefault(child.props.renderNavPoint, true))
            .map((child, i) =>
                <button key={i} className={`yks-nav-point ${navStateClass}`}
                    onClick={(e) => this.scrollToPoint(child)}>
                    {child.props.title}
                </button>
            );

        if (points.length <= 0) {
            return (
                <div className="yks-nav-container">
                    {children}
                </div>
            );
        }

        let navIcon;

        if (this.state.isNavVisible) {
            navIcon = (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
            );
        } else {
            navIcon = (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
            );
        }

        return (
            <div className="yks-nav-container">
                <div className={`yks-nav-points-container yks-card ${navStateClass}`}>
                    <div className="yks-nav-points">
                        <div className={`yks-nav-toggle-btn ${navStateClass}`} onClick={_ => this.toggleNavVisibility()}>
                            {navIcon}
                        </div>
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
        ref.scrollIntoView({ block: "end", behavior: "smooth" });
    }
    toggleNavVisibility() {
        this.setState({
            isNavVisible: !this.state.isNavVisible
        });
    }
}

export default YksNav;