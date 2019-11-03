import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/yks-main-page.css';

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
                                <h1 className="main-title">Yikes</h1>
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
                    <div className="flex fx-center fill-page">
                        <div className="flex yks-card livestream">
                            <div className="yks-title">Live Stream</div>
                            <div>Enjoy the 24/7 Stream of nasa doing random interesting stuff. Even thought this is a livestream note that it is not indeed live but just restreaming videos already released.</div>
                            <div className="livestream-container">
                                <iframe title="livestream" width="1280" height="720" src="https://www.youtube.com/embed/21X5lGlDOfg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </YksNavPoint>
                <YksNavPoint title="Autoren">
                    <div className="flex fx-center fill-min-page">
                        <div className="flex fx-wrap full-width fx-space-evenly">
                            <div className="yks-portrait-container yks-card">
                                <YksPortrait imageSrc="https://avatars0.githubusercontent.com/u/36076364?s=400&v=4" />
                                <div>Benny Schärer</div>
                                <button className="yks-button"><Link to={{
                                    pathname: '/autor',
                                    state: { names: ['benny'] }
                                }}>Mehr...</Link></button>
                            </div>
                            <div className="yks-portrait-container yks-card">
                                <YksPortrait imageSrc="https://pbs.twimg.com/profile_images/1072461276805255168/q4hOFV7K_400x400.jpg" />
                                <div>Sophia Menger</div>
                                <button className="yks-button"><Link to={{
                                    pathname: '/autor',
                                    state: { names: ['sophia'] }
                                }}>Mehr...</Link></button>
                            </div>
                        </div>
                    </div>
                </YksNavPoint>
            </YksNav >
        );
    }

}

export default YksMainPage;