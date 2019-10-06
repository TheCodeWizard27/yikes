import React from 'react';
import '../styles/yks-nav-point.css';

class YksNavPoint extends React.Component {
    constructor(props) {
        super(props);

        console.log(`${props.title} got called.`)

        this._ref = React.createRef();

        if(this.props.ref)
            this.props.ref(this._ref.current);
    }

    render() {
        return (
            <div ref={this._ref} className="yks-nav-point-container">
                <div className="yks-nav-point-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default YksNavPoint;