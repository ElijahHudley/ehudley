import React, {Component} from 'react';
import {Routes} from '../../Routes';

import {MobileMenu} from "./mobileMenu";
import logo from '../../assets/Images/logo2.png';
import instagram from '../../assets/Images/icons8-instagram.svg';
import twitter from '../../assets/Images/icons8-twitter.svg';
import menu from '../../assets/Images/icons8-menu.svg';

import './headerStyle.scss';

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showMobileNav: false,
        }
    }

    showNav() {
        const { showMobileNav } = this.state;
        this.setState({showMobileNav: !showMobileNav });
    }

    render() {
        const {showMobileNav} = this.state;

        return (
            <header className={'header'}>
                <div className="container">
                    <div className={'logo-container'}>
                        <a href={Routes.HOME}>
                            <img className={'logo'} src={logo} alt="Logo" />
                        </a>
                    </div>

                    <div className={'social-container'}>
                         <MobileMenu id={showMobileNav} showNav={() => this.showNav()} />

                        <span onClick={() => this.showNav()}>
                            <img className={'social-img menu-img'} src={menu} alt="menu" />
                        </span>
                        {/*<a href="https://instagram.com/superhiro20" target={"_blank"}>*/}
                            {/*<img className={'social-img'} src={instagram} alt="instagram" />*/}
                        {/*</a>*/}
                        {/*<a href="https://twitter.com/SuperHiro20" target={"_blank"}>*/}
                            {/*<img className={'social-img'} src={twitter} alt="twitter" />*/}
                        {/*</a>*/}
                    </div>
                </div>
        </header>
        );
    }
}

