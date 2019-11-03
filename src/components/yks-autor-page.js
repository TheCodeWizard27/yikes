import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './carousel/Carousel.js';

import YksNav from './yks-nav';
import YksNavPoint from './yks-nav-point';
import YksPortrait from './yks-portrait';

import '../styles/yks-autor-page.css';
import YikesCarousel from './carousel/Carousel.js';
import YksCarousel from './yks-carousel.js';

const autorData = new Map();
autorData.set('benny', {
    name: 'Benny Schärer',
    pdLink: 'https://avatars0.githubusercontent.com/u/36076364?s=400&v=4',
    downloads: [
        'Benny_Schärer_Urheberrecht.pdf',
        'Datei_Typen.pdf',
        'Plugins_und_Scripts.pdf'
    ]
});
autorData.set('sophia', {
    name: 'Sophia Menger',
    pdLink: 'https://pbs.twimg.com/profile_images/1072461276805255168/q4hOFV7K_400x400.jpg',
    downloads: [
        'Sophia_Menger_Urheberrecht.pdf',
        'Datei_Typen.pdf',
        'Plugins_und_Scripts.pdf'
    ]
});

class YksAutorPage extends React.Component {
    render() {
        window.scrollTo(0,0);
        let names;
        if (this.props.location && this.props.location.state) {
            names = this.props.location.state.names
        } else {
            names = ['benny', 'sophia'];
        }

        const content = names.map((autor, i) => {
            const tempData = autorData.get(autor);
            return (
                <YksNavPoint renderNavPoint={false} key={i} title={tempData.name}>
                    <div className='portrait-title'>
                        <YksPortrait imageSrc={tempData.pdLink} />
                        <div className='main-title'>{tempData.name}</div>
                    </div>
                    <YksCarousel images={
                        [
                            {
                                imageSrc: 'pictures/P1060027.jpg',
                                imageData: 'sample text1'
                            },
                            {
                                imageSrc: 'pictures/P1060031.jpg',
                                imageData: 'sample text2'
                            },
                            {
                                imageSrc: 'pictures/P1060036.jpg',
                                imageData: 'sample text3'
                            },
                            {
                                imageSrc: 'pictures/P1060037.jpg',
                                imageData: 'sample text4'
                            },
                            {
                                imageSrc: 'pictures/P1060039.jpg',
                                imageData: 'sample text5'
                            },
                            {
                                imageSrc: 'pictures/P1060040.jpg',
                                imageData: 'sample text6'
                            },
                            {
                                imageSrc: 'pictures/P1060044.jpg',
                                imageData: 'sample text7'
                            }
                        ]
                    }/>
                    <div className="flex fx-center">
                        <div className="yks-card default-padding">
                            {tempData.downloads.map((file, i) => {
                                return (
                                    <div className="flex fx-space-between" key={i}>
                                        <button className="yks-button">
                                            <a href={`files/${file}`} download>
                                                {file}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
                                            </a>
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </YksNavPoint>
            )
        });

        return (
            <YksNav>
                <YksNavPoint renderNavPoint={false}>
                    <div className='yks-nav-btn yks-back-btn'>
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg>
                        </Link>
                    </div>
                </YksNavPoint>
                {content}
            </YksNav>
        );
    }
}

export default YksAutorPage;