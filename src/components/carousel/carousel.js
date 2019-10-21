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
            images: []
        });

        setTimeout(() => {
            this.setState({
                children: this.createChildren(),
            })
        }, 100);
    }

    createChildren = n => range(n).map(i => <div key={i} style={{ height: 200, background: '#333' }}>{i}</div>);

    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

    render() {
        const {
            activeItemIndex,
        } = this.state;

        return (
            <ItemsCarousel
                // Placeholder configurations


                // Carousel configurations
                infiniteLoop={false}
                numberOfCards={1}
                gutter={12}
                showSlither={false}
                firstAndLastGutter={false}
                freeScrolling={false}
                infiniteLoop={true}

                // Active item configurations
                requestToChangeActive={this.changeActiveItem}
                activeItemIndex={activeItemIndex}
                activePosition={'center'}

                chevronWidth={15}
                rightChevron={
                    <CarouselButton buttonVal=">"/>
                      
                  }
                leftChevron={
                    <CarouselButton buttonVal="<"/>
                }
                outsideChevron={false}
                alwaysShowChevrons={true}
            >
                {this.props.images.map((image, i) => {
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
        );
    }
}