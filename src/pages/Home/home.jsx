import React, {Component} from 'react';
import { detect } from 'detect-browser';

import {About} from "../About";
import {Contact} from "../Contact";
import {Mentions} from "../Mentions";
import {Works} from "../Works";

import {ParticleSystem} from '../../components/particles';
import {Footer} from "../../components/footer";

import './homeStyle.scss';

const cover = require('../../assets/Images/cover.png');

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            height: 0
        }

        this.divElement = null;
    }

    componentDidMount() {
        const height = this.divElement.clientHeight;
        this.setState({ height });
    }

    chooseVideo() {
        let isSafari = false;

        if (detect().name.toLowerCase() === 'safari' || detect().name.toLowerCase() === 'ios') {
            isSafari = true;
        }

        if (isSafari) {
            const mp4 = require('../../assets/Videos/background_1.mp4');
            return (<source src={mp4} type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'  />)
        } else {
            const webm = require('../../assets/Videos/background.webm');
            return (<source src={webm} type='video/webm;codecs="vp8, vorbis"' />)
        }
    }

    render() {
        const {height} = this.state;

        return (
            <div className={'home'}>
                <div className={'home-container'}>
                    <section className={'container'} ref={ (divElement) => this.divElement = divElement}>

                        <div className="text-vertical-center">
                            <span className={'title'}>Elijah Hudley</span>
                            <span className={'subTitle'}>Hiroic Developer | @Superhiro20</span>
                        </div>

                        <div className={'screen-video'}>
                            <video loop muted playsInline autoPlay poster={cover} className="fullscreen-bg-video">
                                {this.chooseVideo()}
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <div className={'particles'}>
                            <ParticleSystem height={height}/>
                        </div>
                    </section>


                    <section className="quote">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <p className="quoteText">
                                        "I believe everyone in the world is born with genius-level talent. Apply yourself to whatever you’re genius at, and you can do anything in the world."
                                    </p>
                                    <p className={'quoteText'}> - Jay-Z</p>

                                </div>
                            </div>
                        </div>
                    </section>

                    <About />
                    <Mentions />
                    <Works />
                    <Contact />

                    <Footer/>
                </div>
            </div>
            );
    }
}

