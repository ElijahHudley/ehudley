import React, {Component} from 'react';
import Anime from 'react-anime';
import {Nav} from "../../nav";

import './mobileMenuStyle.scss';

export default class MobileMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMobileNav: false,
            menuDirectionUp: false,
        }
    }

    render() {
        const {id, showNav} = this.props;
        return (
            <div className={`mobile-navMenu ${id ? 'moveDown' : 'moveUp'}`}>
                <Nav showNav={() => showNav()}/>
            </div>
        );
    }
}

