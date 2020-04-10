import React, {Component} from 'react';
import Anime from 'react-anime';

import './overlayStyle.scss';

export default class Overlay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showOverlay: true
        }
    }

    removeOverlay = () => {
        this.setState({ showOverlay: false });
    };

    render() {
        const { showOverlay } = this.state;
        const styleDisplay = showOverlay ? null : {display: 'none'};

        return showOverlay ? (
            <Anime
                easing={'easeInOutBack'}
                opacity={[1, 0]}
                duration={1500}
                delay={3500}
                complete={this.removeOverlay}
            >

                <div style={styleDisplay} className={'overlay'}>
                    <Anime
                        easing={'easeInOutBack'}
                        translateY={[0, 150]}
                        opacity={[1, 0]}
                        duration={1500}
                        delay={2500}>

                    <div className={'overlay-title'}>
                        <Anime
                            easing={'easeInOutBack'}
                            translateY={[50, 0]}
                            opacity={[0, 1]}
                            duration={1500}
                            delay={0}>

                        <h2 className={'title'}>A Hiroic Creation</h2>
                        </Anime>

                        <Anime
                            easing={'easeInOutBack'}
                            translateY={[50, 0]}
                            opacity={[0, 1]}
                            duration={1500}
                            delay={1000}>
                        <h3 className={'sub'}>@Superhiro20</h3>
                        </Anime>
                    </div>
                    </Anime>
                </div>
            </Anime>
        ) : (null);
    }
}
