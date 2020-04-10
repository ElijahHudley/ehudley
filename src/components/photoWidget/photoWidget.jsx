import React, {Component} from 'react';
import Anime from 'react-anime';

import './photoWidgetStyle.scss';

export default class PhotoWidget extends Component {

    render() {
       const {
            galleryData = {},
            backgroundImageLink = '',
            titleText = '',
            itemIndex = 1,
           onClickFunc = () => {},
       } = this.props;

        const preStr = require(`../../assets${backgroundImageLink}`);

        const divStyle={
            backgroundImage: `url(${preStr})`,
            backgroundPosition: '60% 0px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        };

        return (
            <Anime
                key={`${itemIndex + Math.random()}-gallery-link`}
                easing={'linear'}
                loop={false}
                duration={1000}
                direction={"normal"}
                delay={(el) => itemIndex * 50}
                translateX={['200rem', '0rem']}
                scale={[0.9, 1]}>
                <div style={divStyle} className={'gallery-link'}>
                    <button className={'gallery-link-button'} onClick={(ev, data) => onClickFunc(ev, galleryData) } >
                        <span className={'gallery-button-text'}> {titleText} </span>
                    </button>
                </div>
            </Anime>
        );
    }
}

