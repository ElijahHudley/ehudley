import React, {Component} from 'react';
// import { detect } from 'detect-browser';

import './footerStyle.scss';

export default class Footer extends Component {
    render() {

        const currentYear = new Date().getFullYear();

        return (
            <footer className={'footer'}>
                <div className={'footer-container'}>
                    <div className={'copyright-text'}>
                        {`This is a Hiroic Creation || \u00a9 ${currentYear} `}
                     </div>
                </div>
            </footer>
            );
    }
}

