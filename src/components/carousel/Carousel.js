import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import CarouselButton from './CarouselButton';

import '../../styles/main.css';
import '../../styles/style.css';


export default class YikesCarousel extends React.Component {

    componentWillMount() {
        this.setState({
            children: [],
            activeItemIndex: 0,
            activeText:  0,
            images: []
        });

        setTimeout(() => {
            this.setState({
                children: this.createChildren(),
            })
        }, 100);
    }

    createChildren = n => range(n).map(i => <div key={i} style={{ height: 200, background: '#333' }}>{i}</div>);

    changeActiveItem = (activeItemIndex) => {
        let propLength = this.props.images.src.length;
        for(let i = propLength; i !== 0; i--){
            if(activeItemIndex % i === 0){
               this.state.activeText = i ;
               break;
            };
        }

        this.setState({ activeItemIndex });
    }

    render() {
        const {
            activeItemIndex,
            activeText,
        } = this.state;

        return (
            <div className={this.props.className}>
            <ItemsCarousel 
                // Placeholder configurations


                // Carousel configurations
                infiniteLoop={false}
                numberOfCards={1}

                firstAndLastGutter={false}

                // Active item configurations
                requestToChangeActive={this.changeActiveItem}
                activeItemIndex={activeItemIndex}
                activePosition={'center'}
                rightChevron={
                    <CarouselButton className="carousel-button"buttonVal=">"/>
                      
                  }
                leftChevron={
                    <CarouselButton className="carousel-button" buttonVal="<"/>
                }
                outsideChevron={false}
                alwaysShowChevrons={true}
                infiniteLoop={true}
            >
                {this.props.images.src.map((image, i) => {
                    return (
                        <img
                            className={"slider fill-page"}
                            alt={"alt"}
                            key={i}
                            src={image}
                        />
                    );
                }

                )}      
                
                </ItemsCarousel>
                <div className="carousel-info-button">TESTTESTTEST</div>
                <div className="carousel-info-box"><p className="carousel-info-text">{this.props.images.text[activeText]}</p></div>
                </div>
        );
    }
}