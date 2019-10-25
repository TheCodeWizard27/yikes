import React from 'react';
import { Link } from 'react-router-dom';

class YksAutorPage extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">&gt; Back</Link>
                <div>Hello World</div>
            </div>
        );
    }
}

export default YksAutorPage;