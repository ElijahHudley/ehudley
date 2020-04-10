import React, {Component} from 'react';
import Particles from 'react-particles-js';

import './particleStyle.scss';
import particlesSettings from "./assets/particles";

export default class ParticleSystem extends Component {
    constructor(props) {
        super(props);

        this.particles = null;
        this.state = {
            screenWidth: window.innerWidth - 100,
            screenHeight: window.innerHeight - 250
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ screenWidth: window.innerWidth, screenHeight: window.innerHeight - 180 });
    };

    render() {
        const { screenHeight, screenWidth } = this.state;
        const { height } = this.props;

        return (
            <div id={'particles'} ref={particles => {this.particles = particles;}} className={'particles'}>
            <Particles width={screenWidth} height={height} params={particlesSettings} />
        </div>
        )
    }
}
