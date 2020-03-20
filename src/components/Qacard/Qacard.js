import React, { Component } from 'react';
import './Qacard.css';
import downchevron from './down.svg';


class Qacard extends Component {
    state = {
        showQuestionInfo: false
    };

    render() {
        const { question, answer, company, author, difficulty } = this.props;
        const { showQuestionInfo } = this.state;
        // console.log(this.props);
        return (

            <div class="card-container">
                <div className={`card ${difficulty}`}>
                    <div class="Q-section">
                        <div class="Q-container">
                            <h4 class="Q-text">{question}</h4>
                            <div class="detail-Container">
                                <span class="sub-text">{company}</span>
                                <span class="sub-text">Submitted By:<br /> {author}</span>
                            </div>
                        </div>
                        <div className={`ControlBtn ${showQuestionInfo ? "rotate-180" : ""}`}><img onClick={() => this.setState({ showQuestionInfo: !this.state.showQuestionInfo})} src={downchevron} alt="down" style={{width:'3vw'}}></img></div>

                    </div>

                    {showQuestionInfo ? (
                        <div class="A-section">
                            <div class="A-container">
                                <p class="Q-text">{answer}</p>
                            </div>
                        </div>) : null}
                </div>
            </div>
        )
    }
}

export default Qacard;
