import React, {Component} from 'react';

import {Routes} from '../../Routes';

import './navStyle.scss';

export default class Nav extends Component {
    handleClick = (ev, id) => {
        const {showNav} = this.props;
        ev.preventDefault();

        document.getElementById(id).scrollIntoView();
        showNav();
    }

    render() {
        const {showNav} = this.props;

        return (
            <div className={'nav-container'}>
                <nav className={'nav'}>
                    <div className={"page-link page-link-alt"}>
                        <a target="_self" onClick={(ev, id) => this.handleClick(ev, Routes.CONTACT)} href={Routes.CONTACT}>Contact</a>
                    </div>

                    <div className={"page-link"}>
                        <a target="_self" onClick={(ev, id) => this.handleClick(ev, Routes.ABOUT)} href={Routes.ABOUT}>About Me</a>
                    </div>


                    <div className={"page-link"}>
                        <a target="_self" onClick={(ev, id) => this.handleClick(ev, Routes.WORKS)} href={Routes.WORKS}>Works</a>
                    </div>

                    <div className={"page-link"}>
                        <a target="_self" onClick={(ev, id) => this.handleClick(ev, Routes.MENTION)} href={Routes.MENTIONS}>Mentions</a>
                    </div>
                </nav>
            </div>
        );
    }
}

