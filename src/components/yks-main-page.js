import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/yks-main-page.css';

import YksNav from './yks-nav';
import YksNavPoint from './yks-nav-point';
import YksPortrait from './yks-portrait';

const imageSrc =
    [
        { file: "P1060027", blende: "5", verschlusszeit: "1/200", ISO: "100" },
        { file: "P1060031", blende: "3", verschlusszeit: "1/50", ISO: "100" },
        { file: "P1060037", blende: "5", verschlusszeit: "1/200", ISO: "100" },
        { file: "P1060036", blende: "2.8", verschlusszeit: "1/25", ISO: "100" },
        { file: "P1060039", blende: "2.8", verschlusszeit: "1/225", ISO: "100" },
        { file: "P1060040", blende: "3.6", verschlusszeit: "1/100", ISO: "100" },
        { file: "P1060044", blende: "3.6", verschlusszeit: "1/60", ISO: "100" },
        { file: "P1060046", blende: "3.2", verschlusszeit: "1/30", ISO: "100" },
        { file: "P1060049", blende: "4", verschlusszeit: "1/160", ISO: "100" },
        { file: "P1060051", blende: "2.8", verschlusszeit: "1/60", ISO: "100" }
    ];

class YksMainPage extends React.Component {
    render() {
        const gallery =
            imageSrc.map((image, i) => {
                return (
                    <div key={i} className="pic-container">
                        <div className="pic-wrapper">
                            <div className="pic-text">
                                <div className="pic-text-wrapper">
                                    <p>Blende: {image["blende"]}</p>
                                    <p>Verschlusszeit: {image["verschlusszeit"]}</p>
                                    <p>ISO: {image["ISO"]}</p>
                                </div>
                            </div>
                            <img className="gallery-pic" src={"/pictures/" + image["file"] + ".jpg"} alt={image["file"]}></img>
                        </div>
                    </div>
                );
            });

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
                    <div className="fill-min-page">
                        <div className="gallery">
                            {gallery}
                        </div>

                    </div>
                </YksNavPoint>
                <YksNavPoint title="Bär Grillt">
                    <div className="flex fill-page yks-card livestream">
                        <div className="yks-title">Bär grillt</div>
                        <div className="livestream-container">
                            <iframe title="bärgrillt-video" width="560" height="315" src="https://www.youtube.com/embed/EurM4mjAqaM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </YksNavPoint>
                <YksNavPoint title="Livestream">
                    <div className="flex fill-page yks-card livestream">
                        <div className="yks-title">Live Stream</div>
                        <div>Enjoy the 24/7 Stream of nasa doing random interesting stuff. Even thought this is a livestream note that it is not indeed live but just restreaming videos already released.</div>
                        <div className="livestream-container">
                            <iframe title="livestream" width="1280" height="720" SameSite="None" Secure src="https://www.youtube.com/embed/21X5lGlDOfg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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