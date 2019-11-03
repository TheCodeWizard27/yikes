import React from 'react';
import '../styles/yks-carousel.css';

class YksCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }

    render() {
        let image;
        let imageData;

        if (this.props.images) {
            /*
            let prevImage;
            if (this.state.prevIndex) {
                prevImage = <img className="fade-out" alt="previous image" src={this.props.images[this.state.prevIndex].imageSrc}></img>
            }
            */

            image = (
                <div>
                    <img className="fade-in" alt="carousel image" src={this.props.images[this.state.index].imageSrc}></img>
                </div>
            );
            imageData = (
                <div>
                    {this.props.images[this.state.index].imageData}
                </div>
            );
        } else {
            image = <div>No images available.</div>
            imageData = <div>No image text available.</div>
        }

        return (
            <div className="yks-carousel-container">
                <div className="yks-carousel-btn-left">
                    <div className="yks-icon-button" onClick={() => this.moveUp()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" /><path fill="none" d="M0 0h24v24H0V0z" /></svg>
                    </div>
                </div>
                <div className="yks-carousel-img-container">
                    {image}
                    <div className="yks-card yks-carousel-image-data">
                        {imageData}
                    </div>
                </div>
                <div className="yks-carousel-btn-right">
                    <div className="yks-icon-button" onClick={() => this.moveDown()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" /><path fill="none" d="M0 0h24v24H0V0z" /></svg>
                    </div>
                </div>
            </div>
        );
    }
    updateIndex(newIndex) {
        const maxIndex = this.props.images.length - 1;
        if (newIndex > maxIndex) {
            this.setState({ index: 0, prevIndex: this.state.index });
        } else if (newIndex < 0) {
            this.setState({ index: maxIndex, prevIndex: this.state.index });
        } else {
            this.setState({ index: newIndex, prevIndex: this.state.index });
        }
    }
    moveUp() {
        this.updateIndex(this.state.index + 1);
    }
    moveDown() {
        this.updateIndex(this.state.index - 1);
    }

}

export default YksCarousel;