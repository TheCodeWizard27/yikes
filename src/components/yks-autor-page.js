import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './carousel/Carousel.js';

class YksAutorPage extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">&gt; Back</Link>
                <div>Hello World</div>
                <Carousel className={"carousel"} images={
                    {

                        src: ["/pictures/P1060027.jpg", "/pictures/P1060027.jpg", "/pictures/P1060027.jpg"] ,
                        text: ["uwu", "owo", "awo"]
                    }
                }
                    />
            </div>
        );
    }
}

export default YksAutorPage;