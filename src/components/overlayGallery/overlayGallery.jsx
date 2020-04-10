import React, {Component} from 'react';
import Anime from 'react-anime';
import ImageGallery from 'react-image-gallery';

import './overlayGalleryStyle.scss';

export default class OverlayGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDescription: false,
        }
    }

    removeOverlay = () => {
        this.props.closeGallery(false);
    };

    renderLeftNav = (onClick, disabled) => {
        return (
            <button
                className='image-gallery-custom-nav image-gallery-custom-left-nav'
                disabled={disabled}
                onClick={onClick}>
                <img alt="left" src={require('../../assets/Images/icons8-left.svg')} />
            </button>
        )
    };

    renderRightNav = (onClick, disabled) => {
        return (
            <button
                className='image-gallery-custom-nav image-gallery-custom-right-nav'
                disabled={disabled}
                onClick={onClick}>
                <img alt={'right'} src={require('../../assets/Images/icons8-right.svg')} />
            </button>
        )
    };

    render() {
        const {
            galleryData = {},
            showOverlay = false,
        } = this.props;

        const galleryItems = galleryData.images.map((item, index) => {
            return {
                original: require(`../../assets${item}`),
                originalTitle: galleryData.title,
                thumbnail: '',
                description: galleryData.description,
            }
        });

        return showOverlay && (
            <Anime
                easing={'linear'}
                opacity={[0, 1]}
                duration={500}
                delay={100}>
                <div className={'overlay'}>
                    <button onClick={() => this.removeOverlay()} className={'galleryButton closeGallery'}>
                        <img alt={'close'} src={require('../../assets/Images/icons8-close.svg')} />
                    </button>

                    <div hidden={false} className={'gallery'}>
                    <ImageGallery
                        items={galleryItems}
                        showFullscreenButton={false}
                        useBrowserFullscreen={false}
                        autoPlay={false}
                        showPlayButton={false}
                        renderLeftNav={this.renderLeftNav}
                        renderRightNav={this.renderRightNav}
                    />
                    </div>
                </div>
            </Anime>
        );
    }
}
