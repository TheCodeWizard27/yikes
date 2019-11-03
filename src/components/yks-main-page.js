import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/yks-main-page.css';

import YksNav from './yks-nav';
import YksNavPoint from './yks-nav-point';
import YksPortrait from './yks-portrait';

class YksMainPage extends React.Component {
    componentWillMount() {
        this.setState({
            imagesSrc: 
                [
                    {file: "P1060027", text: "P1060027"},
                    {file: "P1060031", text: "P1060031"},
                    {file: "P1060037", text: "P1060037"},
                    {file: "P1060036", text: "P1060036"},
                    {file: "P1060039", text: "P1060039"},
                    {file: "P1060040", text: "P1060040"},
                    {file: "P1060044", text: "P1060044"},
                    {file: "P1060046", text: "P1060046"},
                    {file: "P1060049", text: "P1060049"},
                    {file: "P1060051", text: "P1060051"}
                ]
        });
    }

        render() {
            const gallery =
                this.state.imagesSrc.map((image, i) => {
                    return (
                        <div className="pic-container">
                            <div className="pic-text">
                                <p>{image["text"]}</p>
                            </div>
                            <img className="gallery-pic" src={"/pictures/" + image["file"] + ".jpg"}></img>
                        </div>
                    );
                });

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
                        <div className="fill-min-page">
                            <div className="gallery">
                                {gallery}
                            </div>

                        </div>
                    </YksNavPoint>
                    <YksNavPoint title="Bär Grillt">
                        <div className="flex fill-page">Bär grillt Page</div>
                    </YksNavPoint>
                    <YksNavPoint title="Livestream">
                        <div className="flex fill-page yks-card livestream">
                            <div className="yks-title">Live Stream</div>
                            <div>Enjoy the 24/7 Stream of nasa doing random interesting stuff. Even thought this is a livestream note that it is not indeed live but just restreaming videos already released.</div>
                            <div className="livestream-container">
                                <iframe title="livestream" width="1280" height="720" src="https://www.youtube.com/embed/21X5lGlDOfg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
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