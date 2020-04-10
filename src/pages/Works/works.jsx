import React, {Component} from 'react';
import './worksStyle.scss';
import medeanImg from "../../assets/Logo/medean.jpg";
import levelImg from "../../assets/Logo/level-logos_1x.jpg";
import medPointImg from "../../assets/Logo/medpoint.jpg";
import curseImg from "../../assets/Logo/CurseInc_Logo.png";
import legacyLogo from "../../assets/Logo/old.png";
import penguemicImg from "../../assets/Logo/penguemic.png";
import learnDistrictImg from "../../assets/Images/logo_stacked.jpg";
import hiroicImg from "../../assets/Images/hiroic_logo.jpg";


export default class  extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="works" className="works">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Works</h2>
                            <div className={'mention-container'}>
                                <div className="mention-section">
                                    <a target='_blank' href={'https://itunes.apple.com/us/app/medean-smart-finance/id1391804232?mt=8'}>
                                        <span className={'title'}>Medean: Smart Finance</span>
                                        <br />
                                        <img src={medeanImg} alt={'Medean: Smart Finance'}/>
                                    </a>
                                </div>

                                <div className="mention-section">
                                    <a target='_blank' href={'https://leveltradingfield.com/'}>
                                        <span className={'title'}>LevelTradingField.com</span>
                                        <br />
                                        <img src={levelImg} alt={'LevelTradingField.com'}/>
                                    </a>
                                </div>

                                <div className="mention-section">
                                    <a target='_blank' href={'https://www2.medpt.com/'}>
                                        <span className={'title'}>MedPoint Digital</span>
                                        <br />
                                        <img src={medPointImg} alt={'MedPoint Digital'}/>
                                    </a>
                                </div>

                            <div className="mention-section">
                                <a target='_blank' href={'http://learndistrict.com/'}>
                                    <span className={'title'}>Curse / Gamepedia  </span>
                                    <br />
                                    <img src={curseImg} alt={'LearnDistrict '}/>
                                </a>
                            </div>

                                <div className="mention-section">
                                    <a target='_blank' href={'http://learndistrict.com/'}>
                                        <span className={'title'}>LearnDistrict </span>
                                        <br />
                                        <img src={learnDistrictImg} alt={'LearnDistrict'}/>
                                    </a>
                                </div>

                            <div className="mention-section">
                                <a target='_blank' href={'http://elijahhudley.github.io/legacy'}>
                                    <span className={'title'}> Legacy </span>
                                    <br />
                                    <img src={legacyLogo} alt={'Legacy'}/>
                                </a>
                            </div>

                            <div className="mention-section">
                                <a target='_blank' href={'http://learndistrict.com/penguemic.html'}>
                                    <span className={'title'}> Penguemic </span>
                                    <br />
                                    <img src={penguemicImg} alt={'penguemic'}/>
                                </a>
                            </div>

                                <div className="mention-section">
                                    <a target='_blank' href={'httpS://hiroiccreations.com'}>
                                        <span className={'title'}> Hiroic Creations </span>
                                        <br />
                                        <img src={hiroicImg} alt={'HIROIC CREATIONS'}/>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            );
    }
}

