import React from 'react';
import { Link } from 'react-router-dom';

import YksNav from './yks-nav';
import YksNavPoint from './yks-nav-point';
import YksPortrait from './yks-portrait';

class YksMainPage extends React.Component {

    render() {
        return (
            <YksNav>
                <YksNavPoint title="Start">
                    <div className="flex-column fx-center fill-page">
                        <div id="title-container">
                            <div className="flex-row fx-center">
                                <h1 id="main-title">Yikes</h1>
                            </div>
                        </div>
                    </div>
                </YksNavPoint>
                <YksNavPoint title="Fotos">
                    <div className="fill-page">
                        <div>TextSample</div>
                    </div>
                </YksNavPoint>
                <YksNavPoint title="Bär Grillt">
                    <div className="flex fill-page">Bär grillt Page</div>
                </YksNavPoint>
                <YksNavPoint title="Livestream">
                    <div className="flex fill-page">
                        <iframe title="livestream" width="1280" height="720" src="https://www.youtube.com/embed/21X5lGlDOfg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </YksNavPoint>
                <YksNavPoint title="Autoren">
                    <div className="flex fx-center fill-min-page">
                        <div className="flex fx-wrap full-width fx-space-evenly">
                            <YksPortrait imageSrc="https://avatars0.githubusercontent.com/u/36076364?s=400&v=4">
                                <div>Benny Schärer</div>
                                <button className="yks-button"><Link to="/autor">Mehr...</Link></button>
                            </YksPortrait>
                            <YksPortrait imageSrc="">
                                <div>Sophia Menger</div>
                                <button className="yks-button"><Link to="/autor">Mehr...</Link></button>
                            </YksPortrait>
                        </div>
                    </div>
                </YksNavPoint>
            </YksNav>
        );
    }

}

export default YksMainPage;