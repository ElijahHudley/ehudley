import React, {Component} from 'react';

import './videoSectionStyle.scss';

export default class VideoSection extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className={'videoSection-container'}>
                <div className={'sectionLeft-info'}>
                </div>

                <div className={'sectionRight-video'}>
                </div>
            </div>
        );
    }
}

