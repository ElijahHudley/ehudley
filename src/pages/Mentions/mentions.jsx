import React, {Component} from 'react';
import './mentionsStyle.scss';
import builtInChicago from "../../assets/Images/builtInChicago.png";
import linkedInImg from "../../assets/Images/Logo-2C-128px-TM.png";
import learnDistrictImg from "../../assets/Images/logo_stacked.jpg";
import githubImg from "../../assets/Images/GitHub-Mark.png";


export default class  extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="mentions" className="mentions">
                <div className="container">
                    <div className="row text-center">
                        <h2>Mentions and Appearances</h2>

                        <div className={'mention-container'}>

                        <div className="mention-section">
                            <a target='_blank' href={'https://www.instagram.com/p/BtlFEGKFLw4/?utm_source=ig_web_copy_link'}>
                            <span className={'title'}>Melanin In Tech</span>
                                <br />
                            <img src={'https://miro.medium.com/fit/c/240/240/1*xK9i_LkABTORuzHBXC-b0g.png'} alt={'Melanin In Tech'}/>
                            </a>
                        </div>

                        <div className="mention-section">
                            <a target='_blank' href={'https://www.builtinchicago.org/2019/02/08/medean-personal-finance-budget-app'}>
                                <span className={'title'}>Built in Chicago - Medean</span>
                                <br />
                                <img src={builtInChicago} alt={'Built in Chicago - Medean'}/>
                            </a>
                        </div>

                        <div className="mention-section">
                            <a target='_blank' href={'https://www.linkedin.com/in/elijahhudley'}>
                                <span className={'title'}>Linkedin Profile</span>
                                <br />
                                <img src={linkedInImg} alt={'Linkedin'}/>
                            </a>
                        </div>

                        <div className="mention-section">
                            <a target='_blank' href={'https://www.kickstarter.com/projects/2020158234/penguemic-word-domination'}>
                                <span className={'title'}>Kickstarter - LearnDistrict</span>
                                <br />
                                <img src={learnDistrictImg} alt={'Kickstarter - LearnDistrict'}/>
                            </a>
                        </div>

                        <div className="mention-section">
                            <a target='_blank' href={'https://github.com/ElijahHudley'}>
                                <span className={'title'}>GitHub</span>
                                <br />
                                <img src={githubImg} alt={'GitHub'}/>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            );
    }
}

