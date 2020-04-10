import React, {Component} from 'react';
import Anime from 'react-anime';

import './contactStyle.scss';
import instagram from "../../assets/Images/instagram.jpg";
import resume from "../../assets/Elijah Alexander Hudley - Resume.pdf";


export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.contactRef = React.createRef()   // Create a ref object
    }

    instagramWidget = () => {
       return (
           <Anime
               easing={'linear'}
               opacity={[0, 1]}
               duration={1500}
               delay={100}
           >
           <div className={'widget'}>
                   <a href="https://twitter.com/superhiro20" target={"_blank"}>
                       <img className={'social-img'} src={"https://pbs.twimg.com/profile_images/1247362954841993216/xIm4DBMz_400x400.jpg"} alt="instagram" />
                   </a>
           </div>
           </Anime>
       )
    };

    render() {
        return (
            <section ref={this.contactRef} id="contact" className="contact">
                <div className="container">
                    <div className="row">
                        <div className="form">
                            <h2>Contact</h2>
                            <Anime
                                easing={'linear'}
                                opacity={[0, 1]}
                                duration={1000}
                                delay={1000}>
                                <div className={'form-el'}>
                                {this.instagramWidget()}

                                    <span className={'resume'}><a target={'_blank'} href={resume}> Download Resume </a></span>
                                </div>
                            </Anime>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

