import React, {Component} from 'react';
import './aboutStyle.scss';


export default class  extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="about" className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Frontend Engineer / Artist</h2>
                            <p className="lead">
                                I'm a developer specialized in using Javascript and Python to create complex user experiences. Having started my journey as a developer at a young age, I've worked with several companies to created games for education, software for fintech, and apps to build financial literacy. I like to create experiences that teach users new skills, increase their knowledge, and provide a positive impact on their lives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            );
    }
}

